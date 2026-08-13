const mockupData = {
    'Overview': `
        <div class="mockup-header">
            <div style="display: flex; align-items: center;">
                <h3 style="font-size: 1rem; color: var(--text-secondary);">Global Event Dashboard</h3>
            </div>
        </div>
        <div class="mockup-stats-grid">
            <div class="mockup-stat-card"><div class="mockup-stat-label">Total Teams</div><div class="mockup-stat-value">342</div></div>
            <div class="mockup-stat-card"><div class="mockup-stat-label">Active Judges</div><div class="mockup-stat-value">12</div></div>
            <div class="mockup-stat-card"><div class="mockup-stat-label">Scores Submitted</div><div class="mockup-stat-value">1,845</div></div>
        </div>
        <div class="mockup-table">
            <div class="mockup-table-row header">
                <div class="mockup-col">Team Name</div><div class="mockup-col">Round Status</div><div class="mockup-col">Assigned Judge</div>
            </div>
            <div class="mockup-table-row">
                <div class="mockup-col">Innovators LLC</div><div class="mockup-col">Reviewing</div><div class="mockup-col">Sarah J.</div>
            </div>
            <div class="mockup-table-row">
                <div class="mockup-col">Data Dynamics</div><div class="mockup-col">Completed</div><div class="mockup-col">Michael R.</div>
            </div>
            <div class="mockup-table-row">
                <div class="mockup-col">Quantum Shift</div><div class="mockup-col">Completed</div><div class="mockup-col">Elena V.</div>
            </div>
        </div>
    `,
    'Participants': `
        <div class="mockup-header">
            <div style="display: flex; align-items: center;">
                <h3 style="font-size: 1rem; color: var(--text-secondary);">Participant Management</h3>
            </div>
        </div>
        <div class="mockup-stats-grid">
            <div class="mockup-stat-card"><div class="mockup-stat-label">Verified Participants</div><div class="mockup-stat-value">1,104</div></div>
            <div class="mockup-stat-card"><div class="mockup-stat-label">Pending Approval</div><div class="mockup-stat-value">48</div></div>
            <div class="mockup-stat-card"><div class="mockup-stat-label">Disqualified</div><div class="mockup-stat-value">3</div></div>
        </div>
        <div class="mockup-table">
            <div class="mockup-table-row header">
                <div class="mockup-col">Participant Name</div><div class="mockup-col">Team Role</div><div class="mockup-col">Status</div>
            </div>
            <div class="mockup-table-row">
                <div class="mockup-col">Alex Chen</div><div class="mockup-col" data-mobile-label="Role: ">Team Lead</div><div class="mockup-col" data-mobile-label="Status: ">Verified</div>
            </div>
            <div class="mockup-table-row">
                <div class="mockup-col">Priya Sharma</div><div class="mockup-col" data-mobile-label="Role: ">Developer</div><div class="mockup-col" data-mobile-label="Status: ">Verified</div>
            </div>
            <div class="mockup-table-row">
                <div class="mockup-col">James Wilson</div><div class="mockup-col" data-mobile-label="Role: ">Designer</div><div class="mockup-col" data-mobile-label="Status: ">Pending</div>
            </div>
        </div>
    `,
    'Rounds': `
        <div class="mockup-header">
            <div style="display: flex; align-items: center;">
                <h3 style="font-size: 1rem; color: var(--text-secondary);">Judging Rounds</h3>
            </div>
        </div>
        <div class="mockup-stats-grid">
            <div class="mockup-stat-card"><div class="mockup-stat-label">Total Rounds</div><div class="mockup-stat-value">3</div></div>
            <div class="mockup-stat-card"><div class="mockup-stat-label">Active Round</div><div class="mockup-stat-value">Round 2</div></div>
            <div class="mockup-stat-card"><div class="mockup-stat-label">Avg. Score</div><div class="mockup-stat-value">84.2/100</div></div>
        </div>
        <div class="mockup-table">
            <div class="mockup-table-row header">
                <div class="mockup-col">Round Name</div><div class="mockup-col">Criteria</div><div class="mockup-col">Status</div>
            </div>
            <div class="mockup-table-row">
                <div class="mockup-col">Round 1: Idea Pitch</div><div class="mockup-col" data-mobile-label="Criteria: ">Innovation, Feasibility</div><div class="mockup-col" data-mobile-label="Status: ">Completed</div>
            </div>
            <div class="mockup-table-row">
                <div class="mockup-col">Round 2: Prototype</div><div class="mockup-col" data-mobile-label="Criteria: ">UX, Tech Stack</div><div class="mockup-col" data-mobile-label="Status: ">Active</div>
            </div>
            <div class="mockup-table-row">
                <div class="mockup-col">Round 3: Final Presentation</div><div class="mockup-col" data-mobile-label="Criteria: ">Impact, Delivery</div><div class="mockup-col" data-mobile-label="Status: ">Upcoming</div>
            </div>
        </div>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mockup Navigation Interactivity
    const navItems = document.querySelectorAll('.mockup-nav-item');
    const mockupContent = document.querySelector('.mockup-main');
    
    if (navItems.length > 0 && mockupContent) {
        navItems.forEach(tab => {
            tab.addEventListener('click', () => {
                if(tab.classList.contains('active')) return;
                
                const tabName = tab.textContent.trim();
                
                // Remove active class from all
                navItems.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked
                tab.classList.add('active');
                
                // Interruptible transition simulation (per Emil's philosophy)
                mockupContent.style.transition = 'none';
                mockupContent.style.opacity = '0.7';
                mockupContent.style.transform = 'scale(0.99)';
                
                // Update content
                if (mockupData[tabName]) {
                    mockupContent.innerHTML = mockupData[tabName];
                }
                
                // Force reflow
                void mockupContent.offsetWidth;
                
                // Animate back in (snappy ease-out curve)
                mockupContent.style.transition = 'opacity 250ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms cubic-bezier(0.23, 1, 0.32, 1)';
                mockupContent.style.opacity = '1';
                mockupContent.style.transform = 'scale(1)';
            });
        });
    }

    // 2. Reveal on scroll (animate skill implementation)
    // Purpose: Delight and preventing jarring pop-ins on scroll
    // Frequency: First-time entry
    // Curve: ease-out (CSS handles the cubic-bezier)
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Select elements to reveal
    const revealElements = document.querySelectorAll('.feature-card, .cta-box, .section-header, .hero-visual');
    revealElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    });

    // 3. Counter Animation for Stats
    const statsContainer = document.getElementById('stats-container');
    if (statsContainer) {
        const statObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-number');
                    const speed = 200; // lower is slower
                    
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const suffix = counter.getAttribute('data-suffix') || '';
                        
                        const updateCount = () => {
                            const current = +counter.innerText.replace(suffix, '');
                            const inc = target / speed;
                            
                            if (current < target) {
                                counter.innerText = Math.ceil(current + inc) + suffix;
                                setTimeout(updateCount, 20);
                            } else {
                                counter.innerText = target + suffix;
                            }
                        };
                        updateCount();
                    });
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statObserver.observe(statsContainer);
    }

    // 4. 3D Tilt Effect on Feature Cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
            card.style.transition = 'none';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)`;
            card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });
});
