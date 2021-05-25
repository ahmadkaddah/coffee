import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './scss/style.scss'
import './css/style.css';
import 'bootstrap';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';

$(function () {

        $('[data-toggle="tooltip"]').tooltip();

        $('.add-to-cart-btn').click(function () {
                alert('اضيف المنتج الى عربة الشراء');
        });

        $('.to-like').click(function () {
                alert('اضيف المنتج الى الاعجابات');
        });

        $('#copyright').text("جميع الحقوق محفوظة للمتجر لسنة " + new Date().getFullYear());

        $('.product-option input[type="radio"]').change(function () {
                $(this).parents('.product-option').siblings().removeClass('active');
                $(this).parents('.product-option').addClass('active');
        });

        $('[data-remove-from-cart]').on("click", function () {
                $(this).parents('[data-product-info]').remove();

                calculateTotalPrice();
        });

        $('[data-product-quantity]').on("change", function () {

                var newQuantity = $(this).val();

                var $parent = $(this).parents('[data-product-info]');

                var pricePerUnit = $parent.attr('data-product-price');

                var totalPriceForProduct = newQuantity * pricePerUnit;
                $parent.find('.total-price-for-product').text(totalPriceForProduct + '$');

                calculateTotalPrice();
        });

        function calculateTotalPrice() {

                var totalPriceForAllProducts = 0;
                $('[data-product-info]').each(function () {

                        var pricePerUnit = $(this).attr('data-product-price');

                        var quantity = $(this).find('[data-product-quantity]').val();

                        var totalPriceForProduct = pricePerUnit * quantity;
                        totalPriceForAllProducts = totalPriceForAllProducts + (totalPriceForProduct);
                });

                $('#total-price-for-all-products').text(totalPriceForAllProducts + '$');
        }

        var citiesByCountry = {
                sa: ['الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الطائف'],
                eg: ['القاهرة', 'الإسكندرية', 'الجيزة', 'السويس', 'بور سعيد'],
                jo: ['عمان', 'الزرقاء', 'إربد', 'الرصيفة', 'عجلون‏'],
                sy: ['دمشق', 'حلب', 'حماه', 'حمص ', 'درعا']
        };
        $('#form-checkout select[name="country"]').on("change", function () {
                var country = $(this).val();

                var cities = citiesByCountry[country];

                $('#form-checkout select[name="city"]').empty();
                $('#form-checkout select[name="city"]').append(
                        '<option disabled selected value="">اختر المدينة</option>'
                );

                cities.forEach(function (city) {
                        var newOption = $('<option></option>');
                        newOption.text(city);
                        newOption.val(city);
                        $('#form-checkout select[name="city"]').append(newOption);
                });
        });
        $('#form-checkout input[name="payment_method"]').on("change", function () {

                var paymentMethod = $(this).val();

                if (paymentMethod === 'on_delivery') {

                        $('#credit-card-info input').prop('disabled', true);

                } else {
                        $('#credit-card-info input').prop('disabled', false);
                }

                $('#credit-card-info').toggle();
        });

        let wave1 = document.getElementById('wave1');
        let wave2 = document.getElementById('wave2');
        let wave3 = document.getElementById('wave3');
        let wave4 = document.getElementById('wave4');

        window.addEventListener('scroll', function () {
                let value = window.scrollY;
                wave1.style.backgroundPositionX = 400 + value * 4  + 'px';
                wave2.style.backgroundPositionX = 300 + value * -4 + 'px';
                wave3.style.backgroundPositionX = 200 + value * 2  + 'px';
                wave4.style.backgroundPositionX = 100 + value * -2 + 'px';
        });
});