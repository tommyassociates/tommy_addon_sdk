import formatDate from './format-date';

const tommy = window.tommy;

export default function (coupons, selectedCoupons, onConfirm, onSkip) {
  const f7 = window.tommy.app.f7;
  let currentCouponIds = [];
  let currentCoupons = selectedCoupons || [];

  const renderCoupons = coupons.map((c) => {
    return Object.assign({}, c, {
      checked: currentCoupons.some(x => x.id === c.id)
       // ? c.id === selectedCoupons.id : false,
    });
  });

  const html = `
  <div class="nurse_booking-coupon-picker">
    <div class="coupon-picker-img">
      <img src="${tommy.addons.getAssetsUrl('nurse_booking')}coupon-picker.svg" height="78">
    </div>
    <div class="coupon-picker-text">${tommy.i18n.t('nurse_booking.coupon_picker.text')}</div>
    <div class="coupon-picker-items">
      ${renderCoupons.map(coupon => `
      <label>
        <input type="checkbox" name="nurse_booking-coupon-picker-radio" value="${coupon.id}" ${coupon.checked ? 'checked' : ''}>
        <div class="coupon-item-content">
          ${coupon.kind !== 'percentage' ? `
          <div class="coupon-item-title">¥ ${coupon.amount}</div>
          ` : `
          <div class="coupon-item-title">${coupon.amount * 100}%</div>
          `}
          <div class="coupon-item-name">${coupon.name}</div>
          ${coupon.expires_at || coupon.valid_to ? `
          <div class="coupon-item-date">${formatDate(coupon.expires_at || coupon.valid_to, 'D MMM YYYY')}</div>
          ` : ''}
        </div>
        <div class="coupon-item-label">${tommy.i18n.t('nurse_booking.coupon_picker.use_label')}</div>
      </label>
      `.trim()).join('')}
    </div>
  </div>
  `.trim();

  const modal = f7.dialog.create({
    content: html,
    cssClass: 'nurse_booking-coupon-picker-modal',
    buttons: [
      {
        text: tommy.i18n.t('nurse_booking.coupon_picker.skip_button', 'Skip'),
        onClick() {
          if (onSkip) onSkip();
        },
      },
      {
        text: tommy.i18n.t('nurse_booking.coupon_picker.confirm_button', 'Confirm'),
        bold: true,
        onClick() {
          if (onConfirm) onConfirm(currentCoupons);
        },
      },
    ],
  }).open();
  const $modalEl = modal.$el;
  $modalEl.find('.dialog-button-bold').addClass('dialog-button-disabled');
  $modalEl.find('input').on('change', (e) => {
    $modalEl.find('.dialog-button-bold').removeClass('dialog-button-disabled');
    const couponId = parseInt(e.target.value, 10)
    const coupon = coupons.find(x => x.id === couponId)
    if (e.target.checked) {
      currentCoupons.push(coupon)
      // currentCouponIds = e.target.value;
      // coupons.forEach((coupon) => {
      //   if (coupon.id === parseInt(currentCouponIds, 10)) {
      //     currentCoupons = coupon;
      //   }
      // });
      // currentCoupons.push()
      // currentCouponIds = e.target.value;
      // coupons.forEach((coupon) => {
      //   if (coupon.id === parseInt(currentCouponIds, 10)) {
      //     currentCoupons = coupon;
      //   }
      // });
    } else {
      currentCoupons.splice(currentCoupons.findIndex(x => x.id === couponId), 1);

      // currentCoupons.reject(x => coupon)
    }
  });
}