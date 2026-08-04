const sectionContentMap = {
  default: {
    roadmap: [
      { label: 'Phase 1', text: 'Launch Postgres/Filecoin hybrid data layer and start agent testing.' },
      { label: 'Phase 2', text: 'Release multichain trading social webapp and mint ERC-8004 agent identity.' },
      { label: 'Phase 3', text: 'Full integration of multichain trading rails and reward distribution.' }
    ],
    modal: {
      eyebrow: 'Community layer',
      title: 'Community Engagement Rewards',
      titleText: 'COMMUNITY ENGAGEMENT REWARDS',
      heading: 'The Vision',
      body: 'Combining the Farcaster social graph with Neynar quality scores and crosschain execution to foster censorship-resistant creator economies.',
      features: [
        { title: 'Open data', text: 'Postgres hot cache for fast reads and Filecoin for archival data sovereignty.' },
        { title: 'Quality ranking', text: 'Neynar ranking helps reduce spam and engagement farming, a trustless infra to reward meaningful content.' },
        { title: 'DeFi execution', text: 'Interchain execution and atomic trades within the boundaries of decentralized finance ethics and mechanics.' }
      ]
    }
  },
  xion: {
    roadmap: [
      { label: 'Phase 1', text: 'Introduce Xion-backed identity and verifiable payment primitives for the first pilot.' },
      { label: 'Phase 2', text: 'Ship the agent experience with reward routing that can be inspected on-chain.' },
      { label: 'Phase 3', text: 'Full integration of White Whale flashloan rails, Neptune execution paths, per-transaction creator yield settlement and protocol fees.' }
    ],
    modal: {
      eyebrow: 'community layer',
      title: ' Community Engagement Rewards',
      titleText: 'COMMUNITY ENGAGEMENT REWARDS',
      heading: 'The vision',
      body: 'Xion gives the experience a lightweight, verifiable identity layer so creator rewards can be traced from signal to payout without losing social context.',
      features: [
        { title: 'Verified identity', text: 'Users and agents can carry identity signals into the reward flow with clear provenance.' },
        { title: 'Quality ranking', text: 'Premium reputation API for agents seeking high-value attention intelligence on X users.' },
        { title: 'Agent-ready execution', text: 'Interchain execution and atomic trades within the boundaries of decentralized finance ethics and mechanics.' }
      ]
    }
  },
  vara: {
    roadmap: [
      {
        label: 'Phase 1',
        text: 'Prototype the Vara-native routing layer with RivrDEX, then keep 1inch as the primary external route and Hummingbot as a fallback for supported venues.'
      },
      {
        label: 'Phase 2',
        text: 'Launch the multichain social trading webapp, add the identity-routing layer that links Farcaster profiles to Vara addresses, and mint ERC-8004-compatible agent identity for the execution layer.'
      },
      {
        label: 'Phase 3',
        text: 'Open the experience to broader community participation, expand reward logic, and let the Vara stack route between local DEX liquidity and external EVM venues as needed.'
      }
    ],
    modal: {
      eyebrow: 'community layer',
      title: 'Community Routing Rewards',
      titleText: 'COMMUNITY ROUTING REWARDS',
      heading: 'The vision',
      body: 'A blueprint for meaningful censorship resistant creator economies: open source infra empowering verifiable on-chain social finance trading.',
      features: [
        {
          title: 'Native agent coordination',
          text: 'Vara’s Gear-based runtime supports fast, low-cost execution, delayed messages, and signless or payless transaction patterns.'
        },
        {
          title: 'Portability',
          text: 'Farcaster profiles linked to Vara addresses and the ERC-8004 compatible agent are portable identities, reputation trails, and validation history that can travel with the trading flow across chains.'
        },
        {
          title: '1% fees on yield',
          text: 'After multichain trading with 1inch and hummingbot we use vara native liquidity through RivrDEX to distribute rewards, protocol 1% fees on yield are managed by the agent.'
        }
      ]
    }
  },
  bitcoin: {
    roadmap: [
      { label: 'Phase 1', text: 'Focus the first phase on settlement and auditability for creator payouts.' },
      { label: 'Phase 2', text: 'Add replayable cross-checks and transparent payout reporting for each reward cycle.' },
      { label: 'Phase 3', text: 'Scale to broader reward distribution once trust and liquidity are proven.' }
    ],
    modal: {
      eyebrow: 'Bitcoin-first rails',
      title: 'Bitcoin Settlement Layer',
      titleText: 'BITCOIN SETTLEMENT LAYER',
      heading: 'Settlement-first trust',
      body: 'When the route points to Bitcoin, the experience highlights a trust-minimized settlement story where creator and community payouts stay transparent at the base layer.',
      features: [
        { title: 'Settlement confidence', text: 'The reward flow centers on durable settlement and verifiable accounting.' },
        { title: 'Auditability', text: 'Every payout can be traced through a simple, visible chain of evidence.' },
        { title: 'Long-term stability', text: 'The story leans toward durable value transfer and credible incentive design.' }
      ]
    }
  },
  base: {
    roadmap: [
       { label: 'Phase 1', text: 'Launch Postgres/Filecoin hybrid data layer and start agent testing on base.' },
      { label: 'Phase 2', text: 'Release multichain trading social webapp and mint ERC-8004 agent identity on base.' },
      { label: 'Phase 3', text: 'Full integration of multichain trading rails and reward distribution on base.' }
    ],
    modal: {
      eyebrow: 'community layer',
      title: 'Community Routing Rewards',
      titleText: 'COMMUNITY ROUTING REWARDS',
      heading: 'The vision',
      body: 'A blueprint for fostering meaningful censorship resistant creator economies on base: open source infra empowering verifiable multi-chain social finance trading.',
      features: [
        { title: 'Trustless Agent', text: 'ERC-8004-style identity, reputation, and validation records keep the agent layer auditable.' },
        { title: 'Multichain', text: '1inch/hummingbot allow cross-chain atomic execution path for each trade.' },
        { title: 'Filecoin Storage', text: 'Preserve transaction receipts and user interactions for long-term auditability.' }
      ]
    }
  },
  vinuchain: {
    roadmap: [
      { label: 'Phase 1', text: 'Use Vinuchain as the narrative layer for trust, provenance, and community storylines.' },
      { label: 'Phase 2', text: 'Tie reward flows to more explicit identity, impact, and participation signals.' },
      { label: 'Phase 3', text: 'Broaden the system into a richer creator and community reputation layer.' }
    ],
    modal: {
      eyebrow: 'Vinuchain-native rails',
      title: 'Vinuchain Reputation Flow',
      titleText: 'VINUCHAIN REPUTATION FLOW',
      heading: 'Reputation-driven incentives',
      body: 'Vinuchain emphasizes provenance and story, making the reward experience feel more grounded in identity, trust, and community contribution.',
      features: [
        { title: 'Provenance', text: 'Contributions can be linked to a stronger, more understandable source of truth.' },
        { title: 'Narrative trust', text: 'The system can frame participation around meaningful contribution rather than noise.' },
        { title: 'Community signal', text: 'Reward logic becomes easier to explain in human terms when provenance is clear.' }
      ]
    }
  },
  q402: {
    roadmap: [
      { label: 'Phase 1', text: 'Shape the first milestone around experimentation, feedback, and proof-of-concept validation.' },
      { label: 'Phase 2', text: 'Turn the learnings into a clearer set of reward and routing rules for users.' },
      { label: 'Phase 3', text: 'Broaden the system once the signal and incentive model prove useful in practice.' }
    ],
    modal: {
      eyebrow: 'Q402-native rails',
      title: 'Q402 Experiment Layer',
      titleText: 'Q402 EXPERIMENT LAYER',
      heading: 'Experiment-first incentives',
      body: 'Q402 focuses the story on learning, iteration, and clear feedback loops before expanding reward mechanics too aggressively.',
      features: [
        { title: 'Rapid iteration', text: 'The flow stays flexible enough to adjust as the product learns from real interaction.' },
        { title: 'Signal testing', text: 'Reward rules can be tuned by observing which signals are actually meaningful.' },
        { title: 'Proof of value', text: 'The experience keeps a strong emphasis on validating ideas before scaling them.' }
      ]
    }
  },
  starknet: {
    roadmap: [
      { label: 'Phase 1', text: 'Use Starknet to explore credible execution and composable reward logic in a scalable environment.' },
      { label: 'Phase 2', text: 'Connect more of the product flow to cost-aware execution and transparent performance metrics.' },
      { label: 'Phase 3', text: 'Scale the system once the technical and incentive layers are fully aligned.' }
    ],
    modal: {
      eyebrow: 'Starknet-native rails',
      title: 'Starknet Execution Story',
      titleText: 'STARKNET EXECUTION STORY',
      heading: 'Scalable execution design',
      body: 'Starknet brings a scalable execution narrative to the experience, supporting a more ambitious reward system without losing clarity.',
      features: [
        { title: 'Scalable architecture', text: 'The system can grow without making the reward story feel too brittle.' },
        { title: 'Cost-aware design', text: 'Execution becomes easier to manage as the product evolves.' },
        { title: 'Strong composability', text: 'The reward layer stays modular and extendable as the product expands.' }
      ]
    }
  },
  kite: {
    roadmap: [
      { label: 'Phase 1', text: 'Use Kite as the guiding concept for a lighter, more intuitive onboarding experience.' },
      { label: 'Phase 2', text: 'Refine the product narrative so community participation feels simpler and more deliberate.' },
      { label: 'Phase 3', text: 'Expand the cadence of participation once the initial experience proves clear and engaging.' }
    ],
    modal: {
      eyebrow: 'Kite-native rails',
      title: 'Kite Community Flow',
      titleText: 'KITE COMMUNITY FLOW',
      heading: 'Simplified participation',
      body: 'Kite highlights a simpler and more human path through the reward experience, making participation feel less abstract and more approachable.',
      features: [
        { title: 'Clear onboarding', text: 'The experience can guide people in with a smoother and more readable flow.' },
        { title: 'Lower friction', text: 'Participation becomes easier when the journey feels less technical and more intuitive.' },
        { title: 'Community focus', text: 'The reward story stays centered on people, participation, and contribution.' }
      ]
    }
  },
  uniswap: {
    roadmap: [
      { label: 'Phase 1', text: 'Frame the first milestone around accessible trading primitives and meaningful participation.' },
      { label: 'Phase 2', text: 'Broaden the route to include clearer execution and incentive feedback loops.' },
      { label: 'Phase 3', text: 'Develop a stronger market-facing reward experience once the flow proves its value.' }
    ],
    modal: {
      eyebrow: 'Uniswap-native rails',
      title: 'Uniswap Market Layer',
      titleText: 'UNISWAP MARKET LAYER',
      heading: 'Market-driven incentives',
      body: 'Uniswap draws attention to liquidity, accessibility, and market participation, making the reward flow feel more practical and exchange-oriented.',
      features: [
        { title: 'Accessible liquidity', text: 'The experience can connect social participation with more familiar market primitives.' },
        { title: 'Clearer mechanics', text: 'Trading and reward logic become easier to understand when framed around established market patterns.' },
        { title: 'Wider reach', text: 'The story can appeal to people who understand DeFi flows and want a more practical reward model.' }
      ]
    }
  },
  cowswap: {
    roadmap: [
      { label: 'Phase 1', text: 'Use CowSwap as the lens for cooperation, intent, and less extractive execution patterns.' },
      { label: 'Phase 2', text: 'Build the reward layer around better routing and more thoughtful trade participation.' },
      { label: 'Phase 3', text: 'Expand the experience into a more collaborative and community-centered execution story.' }
    ],
    modal: {
      eyebrow: 'CowSwap-native rails',
      title: 'CowSwap Coordination Layer',
      titleText: 'COWSWAP COORDINATION LAYER',
      heading: 'Intent-based incentives',
      body: 'CowSwap adds a coordination-centered perspective, making the reward experience feel more collaborative and less purely transactional.',
      features: [
        { title: 'Cooperative execution', text: 'The flow can emphasize shared routing and better outcomes for participants.' },
        { title: 'Intent alignment', text: 'The reward story becomes easier to explain when the execution layer is more intentional.' },
        { title: 'Lower friction', text: 'The experience can feel more elegant and less adversarial when cooperation is central.' }
      ]
    }
  }
};

function openPage(id) {
  document.querySelectorAll('.subpage').forEach(el => el.classList.remove('active'));
  document.body.classList.add('modal-open');

  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
  }
}

function closePages() {
  document.querySelectorAll('.subpage').forEach(el => el.classList.remove('active'));
  document.body.classList.remove('modal-open');
}

function scrollToRoadmap() {
  const roadmap = document.getElementById('roadmap');
  if (roadmap) {
    roadmap.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function getCurrentSection() {
  const params = new URLSearchParams(window.location.search);
  const querySection = params.get('section');
  const bodySection = document.body.getAttribute('data-route-section');
  return (querySection || bodySection || '').toLowerCase();
}

function applySectionContent() {
  const currentSection = getCurrentSection();
  const content = sectionContentMap[currentSection] || sectionContentMap.default;

  const roadmapList = document.querySelector('.roadmap-list');
  if (roadmapList) {
    const items = roadmapList.querySelectorAll('li');
    content.roadmap.forEach((phase, index) => {
      if (items[index]) {
        items[index].innerHTML = `<span class="highlight">${phase.label}:</span> ${phase.text}`;
      }
    });
  }

  const modal = document.getElementById('page-rewards');
  if (modal) {
    const eyebrow = modal.querySelector('.eyebrow');
    if (eyebrow) {
      eyebrow.textContent = content.modal.eyebrow;
    }

    const title = modal.querySelector('h1');
    if (title) {
      title.textContent = content.modal.title;
      title.setAttribute('data-text', content.modal.titleText);
    }

    const cardBody = modal.querySelector('.card-body');
    if (cardBody) {
      cardBody.innerHTML = `
        <h3>${content.modal.heading}</h3>
        <p>${content.modal.body}</p>
      `;
    }

    const featureGrid = modal.querySelector('.feature-grid');
    if (featureGrid) {
      featureGrid.innerHTML = content.modal.features.map(feature => `
        <div class="feature-card">
          <h3>${feature.title}</h3>
          <p>${feature.text}</p>
        </div>
      `).join('');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.getElementById('hero-image');
  if (heroImage) {
    heroImage.style.backgroundPosition = 'center';
  }

  applySectionContent();

  const stackButtons = document.querySelectorAll('.stack-button');
  const stackCards = document.querySelectorAll('.stack-card');

  stackButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');

      stackButtons.forEach(item => item.classList.remove('active'));
      stackCards.forEach(card => card.classList.remove('active'));

      button.classList.add('active');
      const targetCard = document.getElementById(targetId);
      if (targetCard) {
        targetCard.classList.add('active');
      }
    });
  });
});

window.addEventListener('popstate', applySectionContent);
