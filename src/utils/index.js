import moment from 'moment';

export const countriesList = [
  'Brazil',
  'United States',
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Ashmore and Cartier Islands',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas, The',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Bassas da India',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'British Indian Ocean Territory',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burma',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Clipperton Island',
  'Cocos(Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Congo, Democratic Republic of the',
  'Cook Islands',
  'Coral Sea Islands',
  'Costa Rica',
  "Cote d'Ivoire (Cte d'Ivoire)",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Europa Island',
  'Falkland Islands(Islas Malvinas)',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern and Antarctic Lands',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Glorioso Islands',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea - Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and Mcdonald Islands',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle Of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Juan de Nova Island',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia, The Former Yugoslav Republic of',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia, Federated States of',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  "No Man's Land",
  'Norfolk Island',
  'North Korea',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn Islands',
  'Poland',
  'Portugal',
  'Qatar',
  'Reunion',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Helena',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Pierre and Miquelon',
  'Saint Vincent and The Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and The South Sandwich Islands',
  'South Korea',
  'Spain',
  'Spratly Islands',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tromelin Island',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

export const emailValidate = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(email);
};

export const handleBirthDate = (data) => {
  let birthDate = '';
  if (!data.split('T')[0])
    birthDate = moment(data.split(' ')[0]).format('DD/MM/YYYY');
  else birthDate = moment(data.split('T')[0]).format('DD/MM/YYYY');

  return birthDate;
};

export const handleBirthTime = (data) => {
  let birthTime = '';
  if (!data.split('T')[1]) birthTime = moment(data.split(' ')[1], 'HH:mm');
  else birthTime = moment(data.split('T')[1], 'HH:mm');
  return `${birthTime.hours()}h e ${birthTime.minutes()}min`;
};

export const getSignOnPTBR = (sign) => {
  switch (sign) {
    case 'Ari':
      return 'Áries';
    case 'Tau':
      return 'Touro';
    case 'Gem':
      return 'Gêmeos';
    case 'Can':
      return 'Câncer';
    case 'Leo':
      return 'Leão';
    case 'Vir':
      return 'Virgem';
    case 'Lib':
      return 'Libra';
    case 'Sco':
      return 'Escorpião';
    case 'Sag':
      return 'Sagitário';
    case 'Cap':
      return 'Capricórnio';
    case 'Aqu':
      return 'Aquário';
    case 'Pis':
      return 'Peixes';
  }
};

export const getSign = (sign) => {
  switch (sign) {
    case 'Ari':
      return 'Aries';
    case 'Tau':
      return 'Taurus';
    case 'Gem':
      return 'Gemini';
    case 'Can':
      return 'Cancer';
    case 'Leo':
      return 'Leo';
    case 'Vir':
      return 'Virgo';
    case 'Lib':
      return 'Libra';
    case 'Sco':
      return 'Scorpio';
    case 'Sag':
      return 'Sagittarius';
    case 'Cap':
      return 'Capricorn';
    case 'Aqu':
      return 'Aquarius';
    case 'Pis':
      return 'Pisces';
  }
};

export const getAge = (dateString) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
};

export const getRoundedPartial = (partial) => {
  const a = 100;
  const b = -100;
  const c = 100;
  const d = 0;
  const x = Math.trunc(parseFloat(partial));

  return c + ((d - c) / (b - a)) * (x - a);
};
