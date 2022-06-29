'use strict';

var pickItem = require('pick-item');

// Data taken from https://github.com/umpirsky/country-list/blob/master/country/cldr/en_US/country.json
var countries = [{
  name: "Afghanistan",
  abbreviation: "AF"
}, {
  name: "Albania",
  abbreviation: "AL"
}, {
  name: "Algeria",
  abbreviation: "DZ"
}, {
  name: "American Samoa",
  abbreviation: "AS"
}, {
  name: "Andorra",
  abbreviation: "AD"
}, {
  name: "Angola",
  abbreviation: "AO"
}, {
  name: "Anguilla",
  abbreviation: "AI"
}, {
  name: "Antarctica",
  abbreviation: "AQ"
}, {
  name: "Antigua and Barbuda",
  abbreviation: "AG"
}, {
  name: "Argentina",
  abbreviation: "AR"
}, {
  name: "Armenia",
  abbreviation: "AM"
}, {
  name: "Aruba",
  abbreviation: "AW"
}, {
  name: "Australia",
  abbreviation: "AU"
}, {
  name: "Austria",
  abbreviation: "AT"
}, {
  name: "Azerbaijan",
  abbreviation: "AZ"
}, {
  name: "Bahamas",
  abbreviation: "BS"
}, {
  name: "Bahrain",
  abbreviation: "BH"
}, {
  name: "Bangladesh",
  abbreviation: "BD"
}, {
  name: "Barbados",
  abbreviation: "BB"
}, {
  name: "Belarus",
  abbreviation: "BY"
}, {
  name: "Belgium",
  abbreviation: "BE"
}, {
  name: "Belize",
  abbreviation: "BZ"
}, {
  name: "Benin",
  abbreviation: "BJ"
}, {
  name: "Bermuda",
  abbreviation: "BM"
}, {
  name: "Bhutan",
  abbreviation: "BT"
}, {
  name: "Bolivia",
  abbreviation: "BO"
}, {
  name: "Bosnia and Herzegovina",
  abbreviation: "BA"
}, {
  name: "Botswana",
  abbreviation: "BW"
}, {
  name: "Bouvet Island",
  abbreviation: "BV"
}, {
  name: "Brazil",
  abbreviation: "BR"
}, {
  name: "British Antarctic Territory",
  abbreviation: "BQ"
}, {
  name: "British Indian Ocean Territory",
  abbreviation: "IO"
}, {
  name: "British Virgin Islands",
  abbreviation: "VG"
}, {
  name: "Brunei",
  abbreviation: "BN"
}, {
  name: "Bulgaria",
  abbreviation: "BG"
}, {
  name: "Burkina Faso",
  abbreviation: "BF"
}, {
  name: "Burundi",
  abbreviation: "BI"
}, {
  name: "Cambodia",
  abbreviation: "KH"
}, {
  name: "Cameroon",
  abbreviation: "CM"
}, {
  name: "Canada",
  abbreviation: "CA"
}, {
  name: "Canton and Enderbury Islands",
  abbreviation: "CT"
}, {
  name: "Cape Verde",
  abbreviation: "CV"
}, {
  name: "Cayman Islands",
  abbreviation: "KY"
}, {
  name: "Central African Republic",
  abbreviation: "CF"
}, {
  name: "Chad",
  abbreviation: "TD"
}, {
  name: "Chile",
  abbreviation: "CL"
}, {
  name: "China",
  abbreviation: "CN"
}, {
  name: "Christmas Island",
  abbreviation: "CX"
}, {
  name: "Cocos [Keeling] Islands",
  abbreviation: "CC"
}, {
  name: "Colombia",
  abbreviation: "CO"
}, {
  name: "Comoros",
  abbreviation: "KM"
}, {
  name: "Congo - Brazzaville",
  abbreviation: "CG"
}, {
  name: "Congo - Kinshasa",
  abbreviation: "CD"
}, {
  name: "Cook Islands",
  abbreviation: "CK"
}, {
  name: "Costa Rica",
  abbreviation: "CR"
}, {
  name: "Croatia",
  abbreviation: "HR"
}, {
  name: "Cuba",
  abbreviation: "CU"
}, {
  name: "Cyprus",
  abbreviation: "CY"
}, {
  name: "Czech Republic",
  abbreviation: "CZ"
}, {
  name: "Côte d’Ivoire",
  abbreviation: "CI"
}, {
  name: "Denmark",
  abbreviation: "DK"
}, {
  name: "Djibouti",
  abbreviation: "DJ"
}, {
  name: "Dominica",
  abbreviation: "DM"
}, {
  name: "Dominican Republic",
  abbreviation: "DO"
}, {
  name: "Dronning Maud Land",
  abbreviation: "NQ"
}, {
  name: "East Germany",
  abbreviation: "DD"
}, {
  name: "Ecuador",
  abbreviation: "EC"
}, {
  name: "Egypt",
  abbreviation: "EG"
}, {
  name: "El Salvador",
  abbreviation: "SV"
}, {
  name: "Equatorial Guinea",
  abbreviation: "GQ"
}, {
  name: "Eritrea",
  abbreviation: "ER"
}, {
  name: "Estonia",
  abbreviation: "EE"
}, {
  name: "Ethiopia",
  abbreviation: "ET"
}, {
  name: "Falkland Islands",
  abbreviation: "FK"
}, {
  name: "Faroe Islands",
  abbreviation: "FO"
}, {
  name: "Fiji",
  abbreviation: "FJ"
}, {
  name: "Finland",
  abbreviation: "FI"
}, {
  name: "France",
  abbreviation: "FR"
}, {
  name: "French Guiana",
  abbreviation: "GF"
}, {
  name: "French Polynesia",
  abbreviation: "PF"
}, {
  name: "French Southern Territories",
  abbreviation: "TF"
}, {
  name: "French Southern and Antarctic Territories",
  abbreviation: "FQ"
}, {
  name: "Gabon",
  abbreviation: "GA"
}, {
  name: "Gambia",
  abbreviation: "GM"
}, {
  name: "Georgia",
  abbreviation: "GE"
}, {
  name: "Germany",
  abbreviation: "DE"
}, {
  name: "Ghana",
  abbreviation: "GH"
}, {
  name: "Gibraltar",
  abbreviation: "GI"
}, {
  name: "Greece",
  abbreviation: "GR"
}, {
  name: "Greenland",
  abbreviation: "GL"
}, {
  name: "Grenada",
  abbreviation: "GD"
}, {
  name: "Guadeloupe",
  abbreviation: "GP"
}, {
  name: "Guam",
  abbreviation: "GU"
}, {
  name: "Guatemala",
  abbreviation: "GT"
}, {
  name: "Guernsey",
  abbreviation: "GG"
}, {
  name: "Guinea",
  abbreviation: "GN"
}, {
  name: "Guinea-Bissau",
  abbreviation: "GW"
}, {
  name: "Guyana",
  abbreviation: "GY"
}, {
  name: "Haiti",
  abbreviation: "HT"
}, {
  name: "Heard Island and McDonald Islands",
  abbreviation: "HM"
}, {
  name: "Honduras",
  abbreviation: "HN"
}, {
  name: "Hong Kong SAR China",
  abbreviation: "HK"
}, {
  name: "Hungary",
  abbreviation: "HU"
}, {
  name: "Iceland",
  abbreviation: "IS"
}, {
  name: "India",
  abbreviation: "IN"
}, {
  name: "Indonesia",
  abbreviation: "ID"
}, {
  name: "Iran",
  abbreviation: "IR"
}, {
  name: "Iraq",
  abbreviation: "IQ"
}, {
  name: "Ireland",
  abbreviation: "IE"
}, {
  name: "Isle of Man",
  abbreviation: "IM"
}, {
  name: "Israel",
  abbreviation: "IL"
}, {
  name: "Italy",
  abbreviation: "IT"
}, {
  name: "Jamaica",
  abbreviation: "JM"
}, {
  name: "Japan",
  abbreviation: "JP"
}, {
  name: "Jersey",
  abbreviation: "JE"
}, {
  name: "Johnston Island",
  abbreviation: "JT"
}, {
  name: "Jordan",
  abbreviation: "JO"
}, {
  name: "Kazakhstan",
  abbreviation: "KZ"
}, {
  name: "Kenya",
  abbreviation: "KE"
}, {
  name: "Kiribati",
  abbreviation: "KI"
}, {
  name: "Kuwait",
  abbreviation: "KW"
}, {
  name: "Kyrgyzstan",
  abbreviation: "KG"
}, {
  name: "Laos",
  abbreviation: "LA"
}, {
  name: "Latvia",
  abbreviation: "LV"
}, {
  name: "Lebanon",
  abbreviation: "LB"
}, {
  name: "Lesotho",
  abbreviation: "LS"
}, {
  name: "Liberia",
  abbreviation: "LR"
}, {
  name: "Libya",
  abbreviation: "LY"
}, {
  name: "Liechtenstein",
  abbreviation: "LI"
}, {
  name: "Lithuania",
  abbreviation: "LT"
}, {
  name: "Luxembourg",
  abbreviation: "LU"
}, {
  name: "Macau SAR China",
  abbreviation: "MO"
}, {
  name: "Macedonia",
  abbreviation: "MK"
}, {
  name: "Madagascar",
  abbreviation: "MG"
}, {
  name: "Malawi",
  abbreviation: "MW"
}, {
  name: "Malaysia",
  abbreviation: "MY"
}, {
  name: "Maldives",
  abbreviation: "MV"
}, {
  name: "Mali",
  abbreviation: "ML"
}, {
  name: "Malta",
  abbreviation: "MT"
}, {
  name: "Marshall Islands",
  abbreviation: "MH"
}, {
  name: "Martinique",
  abbreviation: "MQ"
}, {
  name: "Mauritania",
  abbreviation: "MR"
}, {
  name: "Mauritius",
  abbreviation: "MU"
}, {
  name: "Mayotte",
  abbreviation: "YT"
}, {
  name: "Metropolitan France",
  abbreviation: "FX"
}, {
  name: "Mexico",
  abbreviation: "MX"
}, {
  name: "Micronesia",
  abbreviation: "FM"
}, {
  name: "Midway Islands",
  abbreviation: "MI"
}, {
  name: "Moldova",
  abbreviation: "MD"
}, {
  name: "Monaco",
  abbreviation: "MC"
}, {
  name: "Mongolia",
  abbreviation: "MN"
}, {
  name: "Montenegro",
  abbreviation: "ME"
}, {
  name: "Montserrat",
  abbreviation: "MS"
}, {
  name: "Morocco",
  abbreviation: "MA"
}, {
  name: "Mozambique",
  abbreviation: "MZ"
}, {
  name: "Myanmar [Burma]",
  abbreviation: "MM"
}, {
  name: "Namibia",
  abbreviation: "NA"
}, {
  name: "Nauru",
  abbreviation: "NR"
}, {
  name: "Nepal",
  abbreviation: "NP"
}, {
  name: "Netherlands",
  abbreviation: "NL"
}, {
  name: "Netherlands Antilles",
  abbreviation: "AN"
}, {
  name: "Neutral Zone",
  abbreviation: "NT"
}, {
  name: "New Caledonia",
  abbreviation: "NC"
}, {
  name: "New Zealand",
  abbreviation: "NZ"
}, {
  name: "Nicaragua",
  abbreviation: "NI"
}, {
  name: "Niger",
  abbreviation: "NE"
}, {
  name: "Nigeria",
  abbreviation: "NG"
}, {
  name: "Niue",
  abbreviation: "NU"
}, {
  name: "Norfolk Island",
  abbreviation: "NF"
}, {
  name: "North Korea",
  abbreviation: "KP"
}, {
  name: "North Vietnam",
  abbreviation: "VD"
}, {
  name: "Northern Mariana Islands",
  abbreviation: "MP"
}, {
  name: "Norway",
  abbreviation: "NO"
}, {
  name: "Oman",
  abbreviation: "OM"
}, {
  name: "Pacific Islands Trust Territory",
  abbreviation: "PC"
}, {
  name: "Pakistan",
  abbreviation: "PK"
}, {
  name: "Palau",
  abbreviation: "PW"
}, {
  name: "Palestinian Territories",
  abbreviation: "PS"
}, {
  name: "Panama",
  abbreviation: "PA"
}, {
  name: "Panama Canal Zone",
  abbreviation: "PZ"
}, {
  name: "Papua New Guinea",
  abbreviation: "PG"
}, {
  name: "Paraguay",
  abbreviation: "PY"
}, {
  name: "People's Democratic Republic of Yemen",
  abbreviation: "YD"
}, {
  name: "Peru",
  abbreviation: "PE"
}, {
  name: "Philippines",
  abbreviation: "PH"
}, {
  name: "Pitcairn Islands",
  abbreviation: "PN"
}, {
  name: "Poland",
  abbreviation: "PL"
}, {
  name: "Portugal",
  abbreviation: "PT"
}, {
  name: "Puerto Rico",
  abbreviation: "PR"
}, {
  name: "Qatar",
  abbreviation: "QA"
}, {
  name: "Romania",
  abbreviation: "RO"
}, {
  name: "Russia",
  abbreviation: "RU"
}, {
  name: "Rwanda",
  abbreviation: "RW"
}, {
  name: "Réunion",
  abbreviation: "RE"
}, {
  name: "Saint Barthélemy",
  abbreviation: "BL"
}, {
  name: "Saint Helena",
  abbreviation: "SH"
}, {
  name: "Saint Kitts and Nevis",
  abbreviation: "KN"
}, {
  name: "Saint Lucia",
  abbreviation: "LC"
}, {
  name: "Saint Martin",
  abbreviation: "MF"
}, {
  name: "Saint Pierre and Miquelon",
  abbreviation: "PM"
}, {
  name: "Saint Vincent and the Grenadines",
  abbreviation: "VC"
}, {
  name: "Samoa",
  abbreviation: "WS"
}, {
  name: "San Marino",
  abbreviation: "SM"
}, {
  name: "Saudi Arabia",
  abbreviation: "SA"
}, {
  name: "Senegal",
  abbreviation: "SN"
}, {
  name: "Serbia",
  abbreviation: "RS"
}, {
  name: "Serbia and Montenegro",
  abbreviation: "CS"
}, {
  name: "Seychelles",
  abbreviation: "SC"
}, {
  name: "Sierra Leone",
  abbreviation: "SL"
}, {
  name: "Singapore",
  abbreviation: "SG"
}, {
  name: "Slovakia",
  abbreviation: "SK"
}, {
  name: "Slovenia",
  abbreviation: "SI"
}, {
  name: "Solomon Islands",
  abbreviation: "SB"
}, {
  name: "Somalia",
  abbreviation: "SO"
}, {
  name: "South Africa",
  abbreviation: "ZA"
}, {
  name: "South Georgia and the South Sandwich Islands",
  abbreviation: "GS"
}, {
  name: "South Korea",
  abbreviation: "KR"
}, {
  name: "Spain",
  abbreviation: "ES"
}, {
  name: "Sri Lanka",
  abbreviation: "LK"
}, {
  name: "Sudan",
  abbreviation: "SD"
}, {
  name: "Suriname",
  abbreviation: "SR"
}, {
  name: "Svalbard and Jan Mayen",
  abbreviation: "SJ"
}, {
  name: "Swaziland",
  abbreviation: "SZ"
}, {
  name: "Sweden",
  abbreviation: "SE"
}, {
  name: "Switzerland",
  abbreviation: "CH"
}, {
  name: "Syria",
  abbreviation: "SY"
}, {
  name: "São Tomé and Príncipe",
  abbreviation: "ST"
}, {
  name: "Taiwan",
  abbreviation: "TW"
}, {
  name: "Tajikistan",
  abbreviation: "TJ"
}, {
  name: "Tanzania",
  abbreviation: "TZ"
}, {
  name: "Thailand",
  abbreviation: "TH"
}, {
  name: "Timor-Leste",
  abbreviation: "TL"
}, {
  name: "Togo",
  abbreviation: "TG"
}, {
  name: "Tokelau",
  abbreviation: "TK"
}, {
  name: "Tonga",
  abbreviation: "TO"
}, {
  name: "Trinidad and Tobago",
  abbreviation: "TT"
}, {
  name: "Tunisia",
  abbreviation: "TN"
}, {
  name: "Turkey",
  abbreviation: "TR"
}, {
  name: "Turkmenistan",
  abbreviation: "TM"
}, {
  name: "Turks and Caicos Islands",
  abbreviation: "TC"
}, {
  name: "Tuvalu",
  abbreviation: "TV"
}, {
  name: "U.S. Minor Outlying Islands",
  abbreviation: "UM"
}, {
  name: "U.S. Miscellaneous Pacific Islands",
  abbreviation: "PU"
}, {
  name: "U.S. Virgin Islands",
  abbreviation: "VI"
}, {
  name: "Uganda",
  abbreviation: "UG"
}, {
  name: "Ukraine",
  abbreviation: "UA"
}, {
  name: "Union of Soviet Socialist Republics",
  abbreviation: "SU"
}, {
  name: "United Arab Emirates",
  abbreviation: "AE"
}, {
  name: "United Kingdom",
  abbreviation: "GB"
}, {
  name: "United States",
  abbreviation: "US"
}, {
  name: "Unknown or Invalid Region",
  abbreviation: "ZZ"
}, {
  name: "Uruguay",
  abbreviation: "UY"
}, {
  name: "Uzbekistan",
  abbreviation: "UZ"
}, {
  name: "Vanuatu",
  abbreviation: "VU"
}, {
  name: "Vatican City",
  abbreviation: "VA"
}, {
  name: "Venezuela",
  abbreviation: "VE"
}, {
  name: "Vietnam",
  abbreviation: "VN"
}, {
  name: "Wake Island",
  abbreviation: "WK"
}, {
  name: "Wallis and Futuna",
  abbreviation: "WF"
}, {
  name: "Western Sahara",
  abbreviation: "EH"
}, {
  name: "Yemen",
  abbreviation: "YE"
}, {
  name: "Zambia",
  abbreviation: "ZM"
}, {
  name: "Zimbabwe",
  abbreviation: "ZW"
}, {
  name: "Åland Islands",
  abbreviation: "AX"
}];


module.exports = function (options) {

  var counrty = pickItem(countries);

  return options && options.full ? counrty.name : counrty.abbreviation;
};

module.exports.countries = countries;
