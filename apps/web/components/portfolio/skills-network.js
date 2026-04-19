import { useEffect, useRef } from 'react';

const CANVAS_HEIGHT = 340;

const SKILL_CATEGORIES = {
  frontend: {
    color: '#C49A2E',
    nodes: ['React.js', 'Next.js', 'Angular', 'TypeScript', 'SCSS', 'HTML/CSS'],
  },
  backend: {
    color: '#5DCAA5',
    nodes: ['Node.js', 'Python', 'Express.js', 'FastAPI'],
  },
  ai: {
    color: '#AFA9EC',
    nodes: [
      'Langgraph',
      'Langchain',
      'Azure OpenAI',
      'MCP Server',
      'Llama-Index',
      'Whisper',
    ],
  },
  cloud: {
    color: '#F0997B',
    nodes: ['AWS', 'Azure', 'Terraform', 'Lambda', 'S3', 'CloudFront'],
  },
  db: {
    color: '#FAC775',
    nodes: ['MongoDB', 'PostgreSQL', 'MySQL', 'Azure Search'],
  },
};

export default function SkillsNetwork() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const tooltip = tooltipRef.current;

    if (!wrap || !canvas || !tooltip) {
      return undefined;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return undefined;
    }

    let width = wrap.offsetWidth || 640;
    let height = CANVAS_HEIGHT;
    let nodes = [];
    let edges = [];
    let draggingNode = null;
    let hoveredNode = null;
    let animationTime = 0;
    let rafId = 0;

    const applyCanvasSize = () => {
      width = wrap.offsetWidth || 640;
      height = CANVAS_HEIGHT;
      canvas.width = width;
      canvas.height = height;
    };

    const buildGraph = () => {
      nodes = [];
      edges = [];

      const centerX = width / 2;
      const centerY = height / 2;
      const categories = Object.keys(SKILL_CATEGORIES);

      categories.forEach((category, categoryIndex) => {
        const angle =
          (categoryIndex / categories.length) * Math.PI * 2 - Math.PI / 2;
        const ringRadius = 110;
        const hubX = centerX + ringRadius * Math.cos(angle);
        const hubY = centerY + ringRadius * Math.sin(angle);

        nodes.push({
          id: category,
          label: category,
          x: hubX,
          y: hubY,
          vx: 0,
          vy: 0,
          r: 18,
          color: SKILL_CATEGORIES[category].color,
          hub: true,
          cat: category,
        });

        SKILL_CATEGORIES[category].nodes.forEach((skill, skillIndex) => {
          const skillAngle =
            angle +
            (skillIndex - SKILL_CATEGORIES[category].nodes.length / 2) * 0.38;
          const skillRadius = 80 + Math.random() * 20;

          nodes.push({
            id: skill,
            label: skill,
            x: hubX + skillRadius * Math.cos(skillAngle),
            y: hubY + skillRadius * Math.sin(skillAngle),
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: 12,
            color: SKILL_CATEGORIES[category].color,
            hub: false,
            cat: category,
          });

          edges.push({
            a: category,
            b: skill,
            color: SKILL_CATEGORIES[category].color,
          });
        });

        edges.push({
          a: '__center__',
          b: category,
          color: SKILL_CATEGORIES[category].color,
        });
      });

      nodes.unshift({
        id: '__center__',
        label: 'Karthik',
        x: centerX,
        y: centerY,
        vx: 0,
        vy: 0,
        r: 22,
        color: '#C49A2E',
        hub: true,
        center: true,
        cat: null,
      });
    };

    const getThemeStyles = () => {
      const styles = getComputedStyle(document.documentElement);
      return {
        text: styles.getPropertyValue('--color-text-primary') || '#1a1a1a',
      };
    };

    const runPhysics = () => {
      nodes.forEach((node) => {
        if (node === draggingNode) {
          return;
        }

        nodes.forEach((other) => {
          if (other === node) {
            return;
          }

          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;

          if (distance < 90) {
            const force = (0.4 * (90 - distance)) / distance;
            node.vx += dx * force * 0.015;
            node.vy += dy * force * 0.015;
          }
        });

        const home = node.home || (node.home = { x: node.x, y: node.y });
        node.vx += (home.x - node.x) * 0.012;
        node.vy += (home.y - node.y) * 0.012;

        node.vx *= 0.88;
        node.vy *= 0.88;

        node.x += node.vx + Math.sin(animationTime * 0.8 + node.r) * 0.15;
        node.y += node.vy + Math.cos(animationTime * 0.6 + node.r) * 0.12;

        node.x = Math.max(node.r + 5, Math.min(width - node.r - 5, node.x));
        node.y = Math.max(node.r + 5, Math.min(height - node.r - 5, node.y));
      });
    };

    const draw = () => {
      animationTime += 0.016;
      runPhysics();
      ctx.clearRect(0, 0, width, height);

      const theme = getThemeStyles();
      const nodeMap = new Map(nodes.map((node) => [node.id, node]));

      edges.forEach((edge) => {
        const source = nodeMap.get(edge.a);
        const target = nodeMap.get(edge.b);

        if (!source || !target) {
          return;
        }

        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);

        const highlight =
          hoveredNode &&
          (hoveredNode.id === source.id ||
            hoveredNode.id === target.id ||
            hoveredNode.cat === source.id ||
            hoveredNode.cat === target.id);

        const alpha = highlight ? 0.6 : 0.15;
        ctx.strokeStyle =
          edge.color + Math.round(alpha * 255).toString(16).padStart(2, '0');
        ctx.lineWidth =
          hoveredNode &&
          (hoveredNode.id === source.id || hoveredNode.id === target.id)
            ? 1.5
            : 0.5;
        ctx.stroke();
      });

      nodes.forEach((node) => {
        const isHovered = hoveredNode === node;
        const radius = isHovered ? node.r * 1.2 : node.r;

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color + (node.hub ? '33' : '22');
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = node.color + (isHovered ? 'ff' : '88');
        ctx.lineWidth = isHovered ? 1.5 : 0.5;
        ctx.stroke();

        ctx.font = `${node.hub ? '500 ' : ''}${node.hub ? 11 : 10}px 'Courier New', monospace`;
        ctx.fillStyle = isHovered
          ? node.color
          : node.center
            ? node.color
            : theme.text;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        if (node.r >= 16 || isHovered || node.hub) {
          ctx.fillText(node.label, node.x, node.y);
        } else {
          ctx.globalAlpha = 0.7;
          ctx.font = "9px 'Courier New', monospace";
          ctx.fillText(node.label, node.x, node.y + radius + 10);
          ctx.globalAlpha = 1;
        }
      });

      rafId = window.requestAnimationFrame(draw);
    };

    const getNodeAt = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      return (
        nodes.find((node) => Math.hypot(node.x - x, node.y - y) < node.r + 8) ||
        null
      );
    };

    const onMouseMove = (event) => {
      const node = getNodeAt(event.clientX, event.clientY);
      hoveredNode = node;

      if (node && !node.center) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        tooltip.style.left = `${x + 12}px`;
        tooltip.style.top = `${y - 24}px`;
        tooltip.textContent = node.hub
          ? `${node.label.toUpperCase()} LAYER`
          : node.label;
        tooltip.style.opacity = '1';
      } else {
        tooltip.style.opacity = '0';
      }

      if (draggingNode) {
        const rect = canvas.getBoundingClientRect();
        draggingNode.x = event.clientX - rect.left;
        draggingNode.y = event.clientY - rect.top;
      }
    };

    const onMouseDown = (event) => {
      const node = getNodeAt(event.clientX, event.clientY);
      if (node) {
        draggingNode = node;
      }
    };

    const onMouseUp = () => {
      if (draggingNode) {
        draggingNode.home = {
          x: draggingNode.x,
          y: draggingNode.y,
        };
        draggingNode = null;
      }
    };

    const onMouseLeave = () => {
      hoveredNode = null;
      draggingNode = null;
      tooltip.style.opacity = '0';
    };

    const onResize = () => {
      applyCanvasSize();
      buildGraph();
    };

    applyCanvasSize();
    buildGraph();
    draw();

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('resize', onResize);

    return () => {
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', onResize);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="sec skills-sec">
      <div className="sec-eyebrow">skills — drag to explore</div>
      <div id="skills-canvas-wrap" ref={wrapRef}>
        <canvas id="skills-canvas" ref={canvasRef} />
        <div className="skill-tooltip" id="skill-tt" ref={tooltipRef} />
      </div>
    </div>
  );
}
