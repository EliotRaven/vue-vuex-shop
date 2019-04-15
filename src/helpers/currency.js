const digitsRE = /(\d{3})(?=\d)/g;

const currencyFilter = (value, currency, decimals) => {
  const val = parseFloat(value);
  if ((!val && val !== 0)) return '';
  const cur = currency != null ? currency : '$';
  const dec = decimals != null ? decimals : 2;
  const stringified = Math.abs(val).toFixed(dec);
  const int = dec ? stringified.slice(0, -1 - dec) : stringified;
  const i = int.length % 3;
  const head = i > 0 ? (int.slice(0, i) + (int.length > 3 ? ',' : '')) : '';
  const float = dec ? stringified.slice(-1 - dec) : '';
  const sign = val < 0 ? '-' : '';
  return sign + cur + head + int.slice(i).replace(digitsRE, '$1,') + float;
};

export default currencyFilter;
