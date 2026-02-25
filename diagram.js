// ============================================
// Data Engineering Team Network — Interactive Diagram
// ============================================

const teamData = [
    {
        id: 'core',
        name: 'Core Data\nEngineering',
        count: 22,
        gradient: 'url(#grad-core)',
        radius: 72,
        x: 500, y: 350,
        icon: '&#9881;',
        color: '#6366f1',
        description: 'The central hub orchestrating all data pipelines, infrastructure, and platform services across the organization.',
        skills: ['Spark', 'Airflow', 'Kafka', 'dbt', 'Snowflake', 'Python']
    },
    {
        id: 'ml',
        name: 'ML\nEngineering',
        count: 18,
        gradient: 'url(#grad-ml)',
        radius: 56,
        x: 270, y: 180,
        icon: '&#129504;',
        color: '#db2777',
        description: 'Building and deploying machine learning models at scale, MLOps pipelines, and feature stores.',
        skills: ['PyTorch', 'MLflow', 'Kubeflow', 'TensorFlow', 'Ray']
    },
    {
        id: 'product',
        name: 'Product\nAnalytics',
        count: 15,
        gradient: 'url(#grad-product)',
        radius: 50,
        x: 730, y: 180,
        icon: '&#128202;',
        color: '#059669',
        description: 'Driving product decisions through A/B testing, funnel analysis, and user behavior insights.',
        skills: ['Amplitude', 'Mixpanel', 'SQL', 'Python', 'Looker']
    },
    {
        id: 'datasci',
        name: 'Data\nScience',
        count: 14,
        gradient: 'url(#grad-datasci)',
        radius: 48,
        x: 190, y: 370,
        icon: '&#128300;',
        color: '#2563eb',
        description: 'Advanced statistical modeling, forecasting, and research to unlock deep business insights.',
        skills: ['R', 'Python', 'Jupyter', 'Pandas', 'SciPy']
    },
    {
        id: 'marketing',
        name: 'Marketing\nData',
        count: 12,
        gradient: 'url(#grad-marketing)',
        radius: 44,
        x: 770, y: 400,
        icon: '&#128227;',
        color: '#ea580c',
        description: 'Attribution modeling, campaign analytics, and marketing performance optimization.',
        skills: ['Google Analytics', 'Segment', 'SQL', 'Tableau']
    },
    {
        id: 'platform',
        name: 'Platform\nEngineering',
        count: 11,
        gradient: 'url(#grad-platform)',
        radius: 42,
        x: 330, y: 540,
        icon: '&#9729;',
        color: '#7c3aed',
        description: 'Cloud infrastructure, data platform tooling, and developer experience for data teams.',
        skills: ['AWS', 'Terraform', 'K8s', 'Docker', 'Pulumi']
    },
    {
        id: 'customer',
        name: 'Customer\nSuccess',
        count: 10,
        gradient: 'url(#grad-customer)',
        radius: 40,
        x: 680, y: 560,
        icon: '&#128578;',
        color: '#0d9488',
        description: 'Customer health scoring, churn prediction, and success metrics tracking.',
        skills: ['SQL', 'Python', 'Salesforce', 'Gainsight']
    },
    {
        id: 'devops',
        name: 'DevOps\nData',
        count: 9,
        gradient: 'url(#grad-devops)',
        radius: 38,
        x: 140, y: 550,
        icon: '&#9881;',
        color: '#d97706',
        description: 'CI/CD for data pipelines, monitoring, observability, and data reliability engineering.',
        skills: ['GitHub Actions', 'Datadog', 'PagerDuty', 'Prometheus']
    },
    {
        id: 'sales',
        name: 'Sales\nAnalytics',
        count: 8,
        gradient: 'url(#grad-sales)',
        radius: 36,
        x: 870, y: 280,
        icon: '&#128176;',
        color: '#dc2626',
        description: 'Revenue analytics, sales forecasting, pipeline optimization, and CRM data management.',
        skills: ['Salesforce', 'SQL', 'Tableau', 'Python']
    },
    {
        id: 'supply',
        name: 'Supply\nChain',
        count: 7,
        gradient: 'url(#grad-supply)',
        radius: 34,
        x: 880, y: 500,
        icon: '&#128666;',
        color: '#16a34a',
        description: 'Supply chain optimization, demand forecasting, and logistics data analytics.',
        skills: ['SAP', 'Python', 'SQL', 'Tableau']
    },
    {
        id: 'finance',
        name: 'Finance\nData',
        count: 6,
        gradient: 'url(#grad-finance)',
        radius: 32,
        x: 100, y: 220,
        icon: '&#128182;',
        color: '#9333ea',
        description: 'Financial reporting automation, budget analytics, and revenue recognition data pipelines.',
        skills: ['SQL', 'Python', 'NetSuite', 'Looker']
    },
    {
        id: 'risk',
        name: 'Risk &\nCompliance',
        count: 5,
        gradient: 'url(#grad-risk)',
        radius: 30,
        x: 500, y: 140,
        icon: '&#128737;',
        color: '#475569',
        description: 'Data governance, regulatory compliance, privacy engineering, and risk assessment.',
        skills: ['Collibra', 'OneTrust', 'SQL', 'Python']
    },
    {
        id: 'hr',
        name: 'HR\nAnalytics',
        count: 4,
        gradient: 'url(#grad-hr)',
        radius: 28,
        x: 500, y: 580,
        icon: '&#128101;',
        color: '#ec4899',
        description: 'People analytics, workforce planning, and employee experience measurement.',
        skills: ['Workday', 'SQL', 'Python', 'Tableau']
    }
];

// ---- Render the diagram ----
const svg = document.getElementById('network-svg');
const connectionsGroup = document.getElementById('connections');
const nodesGroup = document.getElementById('nodes');
const detailPanel = document.getElementById('detail-panel');

const coreNode = teamData[0];

// Draw connection lines from core to every satellite
teamData.slice(1).forEach(node => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', coreNode.x);
    line.setAttribute('y1', coreNode.y);
    line.setAttribute('x2', node.x);
    line.setAttribute('y2', node.y);
    line.classList.add('connection-line');
    line.dataset.target = node.id;
    connectionsGroup.appendChild(line);
});

// Draw pulse rings on center
for (let i = 0; i < 2; i++) {
    const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    ring.setAttribute('cx', coreNode.x);
    ring.setAttribute('cy', coreNode.y);
    ring.setAttribute('r', coreNode.radius);
    ring.classList.add('pulse-ring');
    ring.style.animationDelay = `${i * 1.25}s`;
    nodesGroup.appendChild(ring);
}

// Draw all nodes
teamData.forEach((node, index) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.classList.add('node-group');
    g.dataset.id = node.id;
    g.setAttribute('filter', 'url(#shadow)');

    // Circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', node.x);
    circle.setAttribute('cy', node.y);
    circle.setAttribute('r', node.radius);
    circle.setAttribute('fill', node.gradient);
    circle.classList.add('node-circle');
    g.appendChild(circle);

    // Label text (split on newline)
    const lines = node.name.split('\n');
    const fontSize = node.radius > 50 ? 13 : node.radius > 35 ? 11 : 10;
    lines.forEach((line, i) => {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', node.x);
        const offsetY = lines.length === 1
            ? node.y - 4
            : node.y - 8 + (i * (fontSize + 3));
        text.setAttribute('y', offsetY);
        text.setAttribute('font-size', fontSize);
        text.classList.add('node-label');
        text.textContent = line;
        g.appendChild(text);
    });

    // Count badge
    const countText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    countText.setAttribute('x', node.x);
    countText.setAttribute('y', node.y + (lines.length === 1 ? 14 : 20));
    countText.setAttribute('font-size', node.radius > 50 ? 14 : 11);
    countText.classList.add('node-count');
    countText.textContent = node.count + ' members';
    g.appendChild(countText);

    // Click handler
    g.addEventListener('click', () => showDetail(node));

    // Hover: highlight connection
    g.addEventListener('mouseenter', () => highlightConnections(node.id, true));
    g.addEventListener('mouseleave', () => highlightConnections(node.id, false));

    // Entrance animation
    g.style.opacity = '0';
    g.style.transform = `translate(0, 20px)`;
    setTimeout(() => {
        g.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        g.style.opacity = '1';
        g.style.transform = 'translate(0, 0)';
    }, 80 + index * 60);

    nodesGroup.appendChild(g);
});

function highlightConnections(nodeId, active) {
    document.querySelectorAll('.connection-line').forEach(line => {
        if (line.dataset.target === nodeId || nodeId === 'core') {
            line.classList.toggle('active', active);
        }
    });
}

function showDetail(node) {
    document.getElementById('panel-title').textContent = node.name.replace('\n', ' ');
    document.getElementById('panel-size').innerHTML = `<span>&#128101;</span> ${node.count} team members`;
    document.getElementById('panel-description').textContent = node.description;
    document.getElementById('panel-icon').style.background = `linear-gradient(135deg, ${node.color}33, ${node.color}66)`;
    document.getElementById('panel-icon').innerHTML = node.icon;

    const skillsContainer = document.getElementById('panel-skills');
    skillsContainer.innerHTML = '';
    node.skills.forEach(skill => {
        const tag = document.createElement('span');
        tag.classList.add('skill-tag');
        tag.textContent = skill;
        skillsContainer.appendChild(tag);
    });

    detailPanel.classList.remove('hidden');
    detailPanel.classList.add('visible');
}

// Close panel
document.getElementById('close-panel').addEventListener('click', () => {
    detailPanel.classList.remove('visible');
    detailPanel.classList.add('hidden');
});

// Close on outside click
document.addEventListener('click', (e) => {
    if (!e.target.closest('.node-group') && !e.target.closest('#detail-panel')) {
        detailPanel.classList.remove('visible');
        detailPanel.classList.add('hidden');
    }
});
