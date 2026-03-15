const blogPosts = [
        // HOME SERVICES
    
        { cat: "Home Services", title: "Winterizing Your Home: A Professional Checklist", excerpt: "Avoid costly pipe bursts and heating failures with these winter-ready tips from top local contractors.", author: "Marcus Sterling", date: "Oct 10, 2024", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80" },
    
         { cat: "Home Services", title: "The Psychology of Interior Design: Colors that Calm", excerpt: "Choose the right palette for your master suite to improve sleep quality and reduce daily stress levels.", author: "Marcus Sterling", date: "Oct 01, 2024", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80" },
     

        // REPAIRS
        { cat: "Repairs", title: "The Seasonal Electrical Audit Every Home Needs", excerpt: "Prevent brownouts and panel failure with this 10-step checklist designed by master electricians.", author: "Marcus Sterling", date: "Sep 15, 2024", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80" },
         { cat: "Repairs", title: "Professional Painting Prep: Why Sanding Matters", excerpt: "The secret to a perfect finish isn't the paint—it's the surface prep. A guide to flawless interior results.", author: "Marcus Sterling", date: "Sep 01, 2024", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80" },
      

        // CLEANING
        { cat: "Cleaning", title: "Deep Cleaning vs. Sanitization: What You Actually Need", excerpt: "Most homeowners overpay for sanitization when a proper deep clean is what the architecture requires.", author: "Marcus Sterling", date: "Sep 28, 2024", img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80" },
        { cat: "Cleaning", title: "5 Eco-friendly Cleaning Hacks for Modern Kitchens", excerpt: "Switch to sustainable solutions without losing the sparkle. Natural degreasers that actually work.", author: "Marcus Sterling", date: "Sep 22, 2024", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" },
       

        // APPLIANCES
        { cat: "Appliances", title: "Is Your Smart Fridge Sending the Right Data?", excerpt: "Smart appliances are efficient, but their connection needs care. Discover how to audit your home tech.", author: "Marcus Sterling", date: "Oct 08, 2024", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" },
        { cat: "Appliances", title: "How to Double Your Washing Machine's Lifespan", excerpt: "Maintenance routines for drum bearings and pump filters that will save you thousands in replacements.", author: "Marcus Sterling", date: "Oct 04, 2024", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80" },
     

        // PERSONAL SERVICES
        { cat: "Personal Services", title: "Finding the Right Academic Tutor for Your Child", excerpt: "Look beyond the degree. How to evaluate teaching style and student engagement for better results.", author: "Marcus Sterling", date: "Sep 14, 2024", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80" },
        { cat: "Personal Services", title: "Setting Realistic Personal Training Milestones", excerpt: "Achieve lasting fitness by tracking the right data. A guide from the city's top-tier physical coaches.", author: "Marcus Sterling", date: "Sep 10, 2024", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" },
      

        // BUSINESS TIPS
        { cat: "Business Tips", title: "Digital Marketing for Local Service Professionals", excerpt: "Focus your ad spend where it matters. Strategies for high-intent local search visibility.", author: "Marcus Sterling", date: "Aug 20, 2024", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80" },
         { cat: "Business Tips", title: "Service Pricing Strategies: Value-based vs Hourly", excerpt: "Maximize your revenue by aligning your prices with the specific outcomes your clients value most.", author: "Marcus Sterling", date: "Aug 12, 2024", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" },
     

        // LOCAL TRENDS
        { cat: "Local Trends", title: "Sustainable Masonry: Why Granite is Back in 2024", excerpt: "Natural stone is outlasting synthetic alternatives. Discover the ROI of choosing granite for your next path.", author: "Marcus Sterling", date: "Jul 27, 2024", img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80" },
        { cat: "Local Trends", title: "The ROI of Smart Home Integration in Modern Suburbs", excerpt: "Do smart locks and thermostats really increase property value? We analyze recent sale data.", author: "Marcus Sterling", date: "Jul 23, 2024", img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80" },
     
    ];

    function renderPosts(filter = "all") {
        const container = $('#blogContainer');
        container.fadeOut(200, function() {
            container.empty();
            
            const filtered = filter === "all" ? 
                blogPosts : 
                blogPosts.filter(p => p.cat === filter);

            filtered.forEach(post => {
                const cardHtml = `
                    <div class="col-sm-6" >
                        <a id="blog-link" href="BDGS-T13-PR-blog-det.html">
                            <article class="pl-blog-card">
                            <div class="pl-card-img-wrap">
                                <div class="pl-card-img" style="background-image: url('${post.img}')"></div>
                                <span class="pl-cat-badge">${post.cat}</span>
                            </div>
                            <div class="pl-card-body">
                                <h3 class="pl-card-title">${post.title}</h3>
                                <p class="pl-card-excerpt">${post.excerpt}</p>
                                <div class="pl-card-footer">
                                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" class="pl-author-img" alt="Author">
                                    <div class="pl-author-box">
                                        <div class="pl-author-meta">${post.author}</div>
                                        <div class="pl-date-meta">${post.date}</div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        </a>
                    </div>
                `;
                container.append(cardHtml);
            });
            container.fadeIn(300);
        });
    }

    $(document).ready(function() {
        // Initial Render
        renderPosts();

        // Category Filtering Logic
        $('.pl-cat-pill').on('click', function() {
            const filter = $(this).data('filter');
            $('.pl-cat-pill').removeClass('active');
            $(this).addClass('active');
            renderPosts(filter);
        });

        // Newsletter Submission
        $('#newsForm').on('submit', function(e) {
            e.preventDefault();
            swal({
                title: "Subscription Confirmed",
                text: "Welcome to The Prime Report. Your first edition arrives Monday.",
                type: "success",
                confirmButtonColor: "#0F172A"
            });
            this.reset();
        });

        // Pagination Simulation
        $('.pl-page-btn').on('click', function() {
            if(!$(this).hasClass('active')) {
                $('.pl-page-btn').removeClass('active');
                $(this).addClass('active');
                $('html, body').animate({
                    scrollTop: $(".pl-category-nav").offset().top - 100
                }, 500);
            }
        });
    });