/* ==============================================
   VENDAS EXPERT 2.0 — Main JavaScript
   ============================================== */

'use strict';

// =============================================
// COUNTDOWN TIMER — 8 minutes
// =============================================
(function initCountdown() {
  const DURATION = 8 * 60; // 8 minutes in seconds
  let timeLeft = DURATION;

  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  function formatTime(seconds) {
    const mm = Math.floor(seconds / 60).toString().padStart(2, '0');
    const ss = (seconds % 60).toString().padStart(2, '0');
    return `${mm}:${ss}`;
  }

  function tick() {
    countdownEl.textContent = formatTime(timeLeft);

    if (timeLeft <= 0) {
      // Reset timer when it reaches 0 (creates urgency loop)
      timeLeft = DURATION;
    } else {
      timeLeft--;
    }
  }

  // Initialize immediately
  tick();

  // Update every second
  setInterval(tick, 1000);

  // Flash effect when under 1 minute
  setInterval(() => {
    if (timeLeft < 60) {
      countdownEl.style.color = timeLeft % 2 === 0 ? '#ff4444' : 'var(--gold-light, #F0C85A)';
    }
  }, 500);
})();


// =============================================
// SCROLL REVEAL ANIMATIONS
// =============================================
(function initScrollReveal() {
  const elements = document.querySelectorAll(
    '.pain-card, .agent-card, .proof-badge, .pain-conclusion, ' +
    '.transition-text, .transition-highlight, .choice-text, ' +
    '.choice-reflection, .objection-wrap, .final-trigger, .proof-text'
  );

  // Add reveal class
  elements.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  });

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  // Check on load and scroll
  checkVisibility();
  window.addEventListener('scroll', checkVisibility, { passive: true });
})();


// =============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// =============================================
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      const urgencyBarHeight = document.querySelector('.urgency-bar')?.offsetHeight || 0;
      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
      const offset = urgencyBarHeight + headerHeight + 16;

      const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    });
  });
})();


// =============================================
// AGENT CARD HOVER PARTICLE EFFECT
// =============================================
(function initCardParticles() {
  const cards = document.querySelectorAll('.agent-card-inner');

  cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      createSparkle(this);
    });
  });

  function createSparkle(parent) {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        const spark = document.createElement('div');
        spark.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #F0C85A;
          pointer-events: none;
          z-index: 10;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: sparkle-anim 0.7s ease forwards;
          box-shadow: 0 0 6px #F0C85A;
        `;
        parent.appendChild(spark);
        setTimeout(() => spark.remove(), 700);
      }, i * 80);
    }
  }

  // Inject sparkle animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes sparkle-anim {
      0%   { opacity: 1; transform: scale(1) translate(0, 0); }
      100% { opacity: 0; transform: scale(0) translate(${getRand()}px, ${getRand()}px); }
    }
  `;
  document.head.appendChild(style);

  function getRand() {
    return (Math.random() - 0.5) * 40;
  }
})();


// =============================================
// URGENCY BAR PULSE ON SCROLL TOP
// =============================================
(function initUrgencyBarBehavior() {
  const bar = document.getElementById('urgencyBar');
  if (!bar) return;

  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Increase intensity when user scrolls deep into page
    if (scrollY > 600) {
      bar.style.borderBottomColor = '#E74C3C';
    } else {
      bar.style.borderBottomColor = 'var(--gold, #C9A84C)';
    }

    lastScrollY = scrollY;
  }, { passive: true });
})();


// =============================================
// AGENT BUTTON CLICK TRACKING (optional analytics hook)
// =============================================
(function initAgentButtons() {
  const buttons = document.querySelectorAll('.btn-agent');

  buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const card = this.closest('.agent-card');
      const agentName = card?.querySelector('.agent-name')?.textContent?.trim() || 'Unknown';

      // Visual ripple on click
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255,255,255,0.35);
        width: 10px;
        height: 10px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: ripple-anim 0.6s ease forwards;
        pointer-events: none;
      `;
      this.style.position = 'relative';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);

      // You can add analytics tracking here:
      // gtag('event', 'click_agent', { agent_name: agentName });
      console.log(`[Vendas Expert 2.0] Agent selected: ${agentName}`);
    });
  });

  // Ripple animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple-anim {
      to { transform: translate(-50%, -50%) scale(30); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
})();


// =============================================
// HEADER STICKY SHADOW ON SCROLL
// =============================================
(function initHeaderEffect() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 4px 30px rgba(201,168,76,0.15)';
      header.style.background = 'rgba(8,8,8,0.97)';
    } else {
      header.style.boxShadow = 'none';
      header.style.background = 'var(--bg-deep, #080808)';
    }
  }, { passive: true });
})();


// =============================================
// PAIN CARDS SEQUENTIAL ENTRANCE
// =============================================
(function initPainCardEntrance() {
  const painCards = document.querySelectorAll('.pain-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.parentElement?.querySelectorAll('.pain-card');
        cards?.forEach((card, i) => {
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, i * 160);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if (painCards.length > 0) {
    painCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    observer.observe(painCards[0]);
  }
})();
