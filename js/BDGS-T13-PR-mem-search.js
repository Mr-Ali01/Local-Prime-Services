const experts = [
            // HOME REPAIRS
            { id: 1, cat: 'home', name: 'Apex Flow Plumbing', rating: 4.9, rev: 1200, price: '499', img: 'images/plumber.jpg', badge: 'premium', history: 'Hired 3 times · Last job Jan 2024', location: 'Brooklyn, New York, USA', desc: 'Verified master plumber specializing in high-pressure leak detection, emergency pipe repair, and full bathroom installations with guaranteed durability.' },




            { id: 5, cat: 'home', name: 'Woodcraft Joiners', rating: 4.2, rev: 150, price: '800', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&q=80', badge: 'premium', location: 'Berlin, Germany', desc: 'Custom furniture design and precision woodwork. From modular kitchens to antique restoration, we bring wood to life.' },

            { id: 6, cat: 'home', name: 'Safe Lock Systems', rating: 4.8, rev: 920, price: '600', img: 'https://images.unsplash.com/photo-1585128792020-803d29415281?w=400&q=80', badge: 'top', location: 'Chicago, Illinois, USA', desc: 'Advanced security solutions including biometric locks, digital safes, and emergency locksmith services for home and office.' },

            // CLEANING SERVICES
            { id: 11, cat: 'cleaning', name: 'Sparkle Home Pros', rating: 4.9, rev: 2100, price: '299', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80', badge: 'premium', location: 'San Diego, California, USA', desc: 'Premium deep cleaning for high-end apartments. Includes steam cleaning, sofa sanitization, and detailed kitchen scrubbing.' },

            { id: 12, cat: 'cleaning', name: 'Deep Clean Squad', rating: 4.6, rev: 890, price: '999', img: 'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=400&q=80', badge: 'top', location: 'Toronto, Ontario, Canada', desc: 'Specialized move-in/move-out cleaning experts. We guarantee your security deposit back with our 100% spotless inspection checklist.' },

            { id: 13, cat: 'cleaning', name: 'Maid Easy Hub', rating: 4.2, rev: 450, price: '150', img: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=400&q=80', badge: 'featured', location: 'Dublin, Ireland', desc: 'Reliable daily and weekly maid services. All staff are background verified and trained in modern household management.' },

            { id: 14, cat: 'cleaning', name: 'Carpet Revive', rating: 3.7, rev: 180, price: '400', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=80', badge: 'sponsored', location: 'Birmingham, England, UK', desc: 'Professional carpet shampooing and stain removal. Restoring the original look and smell of your expensive floor fabrics.' },

            { id: 15, cat: 'cleaning', name: 'Office Shine', rating: 4.8, rev: 1200, price: '1500', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80', badge: 'premium', location: 'New York City, New York, USA', desc: 'Corporate sanitation and janitorial services. Maintaining a germ-free workspace for your team with eco-friendly chemicals.' },

            { id: 16, cat: 'cleaning', name: 'Pool Clear Experts', rating: 4.5, rev: 330, price: '800', img: 'images/Pool-Clear-Experts.jpg', badge: 'top', location: 'Miami, Florida, USA', desc: 'Weekly pool maintenance including pH balancing, algae treatment, and filter cleaning for crystal clear water.' },

            // APPLIANCE REPAIR
            { id: 21, cat: 'appliance', name: 'Fridge Fixer Pro', rating: 4.8, rev: 1500, price: '300', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80', badge: 'premium', location: 'Seattle, Washington, USA', desc: 'Specialist in double-door and smart refrigerators. Genuine spare parts and onsite cooling repair within 4 hours.' },




            { id: 24, cat: 'appliance', name: 'Oven & Range Tech', rating: 3.8, rev: 190, price: '450', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80', badge: 'sponsored', location: 'Rome, Italy', desc: 'Fixing heating elements, thermostat issues, and faulty igniters in ovens and cooking ranges.' },

            { id: 25, cat: 'appliance', name: 'Microwave Medics', rating: 4.0, rev: 210, price: '200', img: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=400&q=80', badge: 'premium', location: 'Amsterdam, Netherlands', desc: 'Specialized in magnetron and keypad repairs for all microwave models. Fast service at your doorstep.' },

            { id: 26, cat: 'appliance', name: 'TV Repair Hub', rating: 4.6, rev: 730, price: '800', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80', badge: 'top', location: 'Los Angeles, California, USA', desc: 'Certified LED/OLED TV technicians. Panel replacement, backlight fixing, and sound issues handled with original parts.' },

            // PERSONAL SERVICES
            { id: 31, cat: 'personal', name: 'Math Mastery Tutor', rating: 4.9, rev: 800, price: '1000', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80', badge: 'premium', location: 'Boston, Massachusetts, USA', desc: 'Expert mathematics tutoring for competitive exams. Personalized learning plans to help students excel in complex calculus and algebra.' },

            { id: 32, cat: 'personal', name: 'Elite Fitness Coach', rating: 4.7, rev: 520, price: '1500', img: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=400&q=80', badge: 'top', location: 'San Francisco, California, USA', desc: 'Certified personal trainer offering home workouts and nutrition guidance. achieve your weight loss or muscle gain goals with custom plans.' },

            { id: 33, cat: 'personal', name: 'The Personal Chef', rating: 4.8, rev: 210, price: '5000', img: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?w=400&q=80', badge: 'featured', location: 'London, England, UK', desc: 'Fine dining experience at home. specializing in multi-cuisine menus for intimate dinner parties and healthy meal prep.' },

            { id: 34, cat: 'personal', name: 'Paws & Claws Groom', rating: 4.2, rev: 330, price: '600', img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&q=80', badge: 'sponsored', location: 'Madrid, Spain', desc: 'Full-service mobile pet grooming. Bathing, styling, and nail clipping at your doorstep to keep your pets happy and clean.' },

            { id: 35, cat: 'personal', name: 'Yoga with Elena', rating: 4.6, rev: 420, price: '800', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80', badge: 'premium', location: 'Zurich, Switzerland', desc: 'Holistic yoga sessions for physical and mental wellness. specializing in Hatha and vinyasa flow for all age groups.' },

            { id: 36, cat: 'personal', name: 'Career Path Coach', rating: 4.5, rev: 150, price: '2500', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80', badge: 'top', location: 'Vancouver, British Columbia, Canada', desc: 'Professional career counseling and resume building. Unlock your potential and land your dream job with expert guidance.' }


        ];

        let filteredExperts = [];
        let currentPage = 1;
        const itemsPerPage = 9;

        function renderCards(data) {
            const grid = $('#results-grid');
            grid.empty();

            if (data.length === 0) {
                $('#empty-state').show();
                $('#pagination-list').empty();
                return;
            }

            $('#empty-state').hide();
            $('#total-count').text(`${filteredExperts.length} experts found`);

            data.forEach(item => {
                let badgeHtml = '';
                if (item.badge) {
                    let label = item.badge.charAt(0).toUpperCase() + item.badge.slice(1);
                    if (label === 'Top') label = 'Top Rated';
                    badgeHtml = `<span class="bdgs-t13-pr-badge bdgs-t13-pr-badge-${item.badge}">${label}</span>`;
                }

                const priceMsg = item.history ? 'Same as last job' : 'Member price (Save $25)';
                const ctaText = item.history ? 'Contact' : 'Contact';

                const card = `
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <article class="bdgs-t13-pr-result-card">
                        <div class="bdgs-t13-pr-card-media">
                            <div class="bdgs-t13-pr-card-img" style="background-image: url('${item.img}')"></div>
                            ${badgeHtml}
                            <div class="bdgs-t13-pr-verify-badge"><i class="fa fa-check"></i></div>
                            <div class="bdgs-t13-pr-shortlist-btn ${item.id === 1 ? 'active' : ''}" title="Add to Shortlist">
                                <i class="fa fa-heart"></i>
                            </div>
                        </div>
                        <div class="bdgs-t13-pr-card-content">
                            <h3 class="bdgs-t13-pr-card-title">${item.name}</h3>
                            <div class="bdgs-t13-pr-rating-row">
                                <div class="bdgs-t13-pr-stars">
                                    <i class="fa fa-star"></i>
                                    <span style="font-weight: 800; color: #1e293b;">${item.rating}</span>
                                </div>
                                <span class="bdgs-t13-pr-review-count">(${item.rev} Reviews)</span>
                            </div>

                            <div class="bdgs-t13-pr-location">
                                <i class="fa fa-map-marker"></i> ${item.location || 'Hyderabad, India'}
                            </div>

                            <div class="bdgs-t13-pr-card-desc">
                                ${item.desc || 'Reliable service provider with a proven track record of quality and customer satisfaction across the local area.'}
                            </div>

                            <div class="bdgs-t13-pr-price-block">
                                <div class="bdgs-t13-pr-price-value">$${item.price}<span class="bdgs-t13-pr-price-unit">/session</span></div>
                                <div class="bdgs-t13-pr-price-context"><i class="fa fa-tag"></i> ${priceMsg}</div>
                            </div>

                            <div class="bdgs-t13-pr-card-actions">
                                <a href="BDGS-T13-PR-mem-profile.html">
                                    <button class="bdgs-t13-pr-btn bdgs-t13-pr-btn-primary contact-btn">${ctaText}</button> </a>
                                    <a href="BDGS-T13-PR-mem-profile.html">
                                <button class="bdgs-t13-pr-btn bdgs-t13-pr-btn-outline msg-btn">Message</button>
                                 </a>
                            </div>
                        </div>
                    </article>
                </div>
            `;
                grid.append(card);
            });
        }

        function renderPagination(totalItems) {
            const totalPages = Math.ceil(totalItems / itemsPerPage);
            const paginationList = $('#pagination-list');
            paginationList.empty();

            if (totalPages <= 1) return;

            // Previous Button
            paginationList.append(`
            <li class="bdgs-t13-pr-page-item ${currentPage === 1 ? 'disabled' : ''}">
                <a class="bdgs-t13-pr-page-link" onclick="changePage(${currentPage - 1})"><i class="fa fa-angle-left"></i></a>
            </li>
        `);

            for (let i = 1; i <= totalPages; i++) {
                paginationList.append(`
                <li class="bdgs-t13-pr-page-item ${i === currentPage ? 'active' : ''}">
                    <a class="bdgs-t13-pr-page-link" onclick="changePage(${i})">${i}</a>
                </li>
            `);
            }

            // Next Button
            paginationList.append(`
            <li class="bdgs-t13-pr-page-item ${currentPage === totalPages ? 'disabled' : ''}">
                <a class="bdgs-t13-pr-page-link" onclick="changePage(${currentPage + 1})"><i class="fa fa-angle-right"></i></a>
            </li>
        `);
        }

        window.changePage = function (page) {
            currentPage = page;
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const paginatedData = filteredExperts.slice(startIndex, endIndex);

            renderCards(paginatedData);
            renderPagination(filteredExperts.length);

            // Scroll to top of results smoothly
            $('html, body').animate({
                scrollTop: $(".bdgs-t13-pr-context-header").offset().top - 100
            }, 500);
        };

        $(document).ready(function () {
            // Init Select2
            $('.select2-filter').select2();

            // Responsive Filter Toggle Logic
            $('#open-filter').on('click', function () {
                $('#sidebar-filter').addClass('active');
                $('#filter-overlay').addClass('active');
                $('body').addClass('filter-open');
            });

            $('#close-filter, #filter-overlay').on('click', function () {
                $('#sidebar-filter').removeClass('active');
                $('#filter-overlay').removeClass('active');
                $('body').removeClass('filter-open');
            });

            // View Mode Toggler
            $('.bdgs-t13-pr-view-trigger').on('click', function () {
                const mode = $(this).attr('id');
                $('.bdgs-t13-pr-view-trigger').removeClass('active');
                $(this).addClass('active');

                if (mode === 'view-list') {
                    $('#results-grid').addClass('bdgs-t13-pr-list-mode');
                } else {
                    $('#results-grid').removeClass('bdgs-t13-pr-list-mode');
                }
            });

            // function applyFilters() {
            //     const cat = $('#category-filter').val();
            //     const minRating = parseFloat($('input[name="rating"]:checked').val()) || 0;

            //     filteredExperts = experts.filter(item => {
            //         const matchCat = cat === 'all' || item.cat === cat;
            //         const matchRating = minRating === 0 || item.rating >= minRating;
            //         return matchCat && matchRating;
            //     });

            //     // Update UI feedback for rating chip
            //     const ratingLabel = $('input[name="rating"]:checked').parent().find('label').text() || '3.5★ & Above';
            //     $('#chip-rating').html(`${ratingLabel} <i class="fa fa-times"></i>`);

            //     currentPage = 1;
            //     changePage(1);
            // }
            function applyFilters() {
                const cat = $('#category-filter').val();
                const minRating = parseFloat($('input[name="rating"]:checked').val()) || 0;

                filteredExperts = experts.filter(item => {
                    const matchCat = cat === 'all' || item.cat === cat;
                    const matchRating = minRating === 0 || item.rating >= minRating;
                    return matchCat && matchRating;
                });

                currentPage = 1;
                changePage(1);

                updateChips(); // 🔥 ADD THIS
            }

            $('#category-filter').on('change', applyFilters);
            $('input[name="rating"]').on('change', applyFilters);
            $('.bdgs-t13-pr-trust-item input').on('change', applyFilters);

            // Initial Apply
            applyFilters();

            $(document).on('click', '.contact-btn', function () {
                swal({
                    title: "Connecting Expert",
                    text: "Establishing a secure connection...",
                    imageUrl: "https://i.gifer.com/ZZ5H.gif",
                    showConfirmButton: false,
                    timer: 2000
                });
            });

            $(document).on('click', '.msg-btn', function () {
                swal({
                    title: "Opening Chat",
                    text: "Launching your secure member messenger.",
                    type: "info",
                    timer: 1500,
                    showConfirmButton: false
                });
            });

            $(document).on('click', '.bdgs-t13-pr-shortlist-btn', function () {
                $(this).toggleClass('active');
                const isActive = $(this).hasClass('active');
                swal({
                    title: isActive ? "Added to Shortlist" : "Removed from Shortlist",
                    timer: 1000,
                    showConfirmButton: false
                });
            });

            // Breadcrumb click handler
            $('.bdgs-t13-pr-breadcrumb a').on('click', function (e) {
                e.preventDefault();
                swal("Redirecting", "Returning to " + $(this).text(), "info");
            });
            function updateChips() {

                /* CATEGORY */
                const catVal = $('#category-filter').val();
                const catText = $('#category-filter option:selected').text();

                if (catVal && catVal !== 'all') {
                    $('#chip-category .chip-text').text(catText);
                    $('#chip-category').removeClass('hidden');
                    $('#chip-category .chip-remove').removeClass('hidden');
                } else {
                    $('#chip-category .chip-text').text('');
                    $('#chip-category .chip-remove').addClass('hidden');
                    $('#chip-category').addClass('hidden');
                }

                /* RATING */
                const ratingVal = $('input[name="rating"]:checked').val();

                if (ratingVal && ratingVal !== 'all') {
                    $('#chip-rating .chip-text').text(`${ratingVal}★ & Above`);
                    $('#chip-rating').removeClass('hidden');
                    $('#chip-rating .chip-remove').removeClass('hidden');
                } else {
                    $('#chip-rating .chip-text').text('');
                    $('#chip-rating .chip-remove').addClass('hidden');
                    $('#chip-rating').addClass('hidden');
                }
            }



            $(document).on('click', '.chip-remove', function () {

                const type = $(this).data('type');

                if (type === 'category') {
                    $('#category-filter')
                        .val('all')
                        .trigger('change.select2');
                }

                if (type === 'rating') {
                    $('#r-all').prop('checked', true);
                }

                applyFilters();
            });


        });