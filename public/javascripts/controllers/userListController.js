var app = angular.module('userListController',[]);

app.controller('userListCtrl', function ($scope,$location){
  $scope.selectedContact = function(contact) {
    $scope.modalContact = contact;
  }
  $scope.redirectToUser = function(){
    // $location.path('/userDetail');
  };
  $scope.contactList = [
    {
      "id": "58a96bf70d552a371dea5b84",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Myrtle Meyers",
      "company": "KAGGLE",
      "email": "myrtlemeyers@kaggle.co.uk",
      "phone": "8774453729",
      "address": "473 Aurelia Court, Dale, Oregon, 1139"
    },
    {
      "id": "58a96bf8422cc1ea7a95a1ec",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Craig Whitaker",
      "company": "PLASMOS",
      "email": "craigwhitaker@plasmos.net",
      "phone": "9135883318",
      "address": "637 Dumont Avenue, Tecolotito, Mississippi, 3558"
    },
    {
      "id": "58a96bf8b7d51d7d9eee6013",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Mckinney Moses",
      "company": "BEDDER",
      "email": "mckinneymoses@bedder.me",
      "phone": "8244563972",
      "address": "380 Lester Court, Croom, Utah, 4691"
    },
    {
      "id": "58a96bf81a0569eaa8597275",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Wendy Juarez",
      "company": "SURELOGIC",
      "email": "wendyjuarez@surelogic.biz",
      "phone": "8085842962",
      "address": "493 Catherine Street, Edinburg, Maryland, 715"
    },
    {
      "id": "58a96bf87aff708865f6d6f6",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Avila Prince",
      "company": "EXTRAGEN",
      "email": "avilaprince@extragen.org",
      "phone": "8694763527",
      "address": "385 Cumberland Street, Dahlen, District Of Columbia, 3135"
    },
    {
      "id": "58a96bf83a0f302a07b9f794",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Alfreda Lynn",
      "company": "EXOSIS",
      "email": "alfredalynn@exosis.info",
      "phone": "8775633014",
      "address": "130 Kaufman Place, Elrama, Vermont, 9485"
    },
    {
      "id": "58a96bf8a08ae12af21ed970",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Allyson Eaton",
      "company": "ROCKYARD",
      "email": "allysoneaton@rockyard.io",
      "phone": "8875843210",
      "address": "495 Eldert Lane, Singer, Virginia, 1593"
    },
    {
      "id": "58a96cc79073953f9245945c",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Anthony Sims",
      "company": "HIVEDOM",
      "email": "anthonysims@hivedom.name",
      "phone": "8674143557",
      "address": "106 Delmonico Place, Veyo, Arkansas, 4813"
    },
    {
      "id": "58a96cc708d87166f84fb943",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Ferguson Pennington",
      "company": "EXTREMO",
      "email": "fergusonpennington@extremo.us",
      "phone": "8644553002",
      "address": "540 Oxford Street, Wacissa, North Carolina, 4020"
    },
    {
      "id": "58a96cc798c45dd8e437d60b",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Michael Benjamin",
      "company": "BARKARAMA",
      "email": "michaelbenjamin@barkarama.net",
      "phone": "8144633369",
      "address": "464 Irvington Place, Kohatk, Louisiana, 7176"
    },
    {
      "id": "58a96cc737664cc0531495f0",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Mia Orr",
      "company": "QUARMONY",
      "email": "miaorr@quarmony.ca",
      "phone": "8294993175",
      "address": "368 Scholes Street, Rushford, Arizona, 9588"
    },
    {
      "id": "58a96cc7efe1620f901cc531",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Cleveland Salinas",
      "company": "ACLIMA",
      "email": "clevelandsalinas@aclima.me",
      "phone": "8725653602",
      "address": "620 Moore Street, Driftwood, Alaska, 6031"
    },
    {
      "id": "58a96cc7196af2e80eda38d8",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Patrice Malone",
      "company": "QUORDATE",
      "email": "patricemalone@quordate.com",
      "phone": "9324933564",
      "address": "321 Carroll Street, Century, Tennessee, 1355"
    },
    {
      "id": "58a96cc75a86482d41264c0b",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Christa Parks",
      "company": "HANDSHAKE",
      "email": "christaparks@handshake.biz",
      "phone": "9734743689",
      "address": "397 Conduit Boulevard, Stewartville, Maine, 7451"
    },
    {
      "id": "58a96cc717cc82874899f71b",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Marietta Vargas",
      "company": "STOCKPOST",
      "email": "mariettavargas@stockpost.co.uk",
      "phone": "9454333962",
      "address": "711 Bridge Street, Roberts, Utah, 1634"
    },
    {
      "id": "58a96cc753211b94ba39354e",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Viola Barber",
      "company": "CONFERIA",
      "email": "violabarber@conferia.org",
      "phone": "9054382027",
      "address": "536 Hampton Avenue, Mooresburg, Northern Mariana Islands, 5399"
    },
    {
      "id": "58a96cc776ad660d689b310d",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Hillary Beck",
      "company": "UNEEQ",
      "email": "hillarybeck@uneeq.info",
      "phone": "8634732556",
      "address": "388 Kensington Walk, Bayview, South Carolina, 899"
    },
    {
      "id": "58a96cc75521ce44b90befff",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Carrie Herman",
      "company": "KATAKANA",
      "email": "carrieherman@katakana.io",
      "phone": "9524433334",
      "address": "150 Lester Court, Edinburg, American Samoa, 6262"
    },
    {
      "id": "58a96cc7cc0558b3e7d7551e",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Vaughn Munoz",
      "company": "FUELTON",
      "email": "vaughnmunoz@fuelton.tv",
      "phone": "9885483720",
      "address": "227 Horace Court, Deercroft, Illinois, 9188"
    },
    {
      "id": "58a96cc7577fb500e13b1955",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Stephanie Dale",
      "company": "ENORMO",
      "email": "stephaniedale@enormo.name",
      "phone": "8774152027",
      "address": "776 Hancock Street, Rodman, Texas, 5258"
    },
    {
      "id": "58a96cc7823051408cba1eb3",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Dillard Foley",
      "company": "DAISU",
      "email": "dillardfoley@daisu.us",
      "phone": "8364973503",
      "address": "376 Homecrest Court, Rivers, Virgin Islands, 3822"
    },
    {
      "id": "58a96cc74e2ce8a62bb75d3f",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Workman Stephenson",
      "company": "VIASIA",
      "email": "workmanstephenson@viasia.net",
      "phone": "8964403907",
      "address": "532 Crosby Avenue, Stockdale, Hawaii, 9204"
    },
    {
      "id": "58a96cc7242bae2dbd2deeb2",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Kidd Mckinney",
      "company": "KIDSTOCK",
      "email": "kiddmckinney@kidstock.ca",
      "phone": "8794952759",
      "address": "723 Duryea Place, Morningside, Montana, 4064"
    },
    {
      "id": "58a96cc758ac77921aca4b4f",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Mckee Woodard",
      "company": "COMVENE",
      "email": "mckeewoodard@comvene.me",
      "phone": "9915532013",
      "address": "758 Meadow Street, Calverton, New Jersey, 7901"
    },
    {
      "id": "58a96cc7af2e5e328bfba7ab",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Penny Emerson",
      "company": "SNORUS",
      "email": "pennyemerson@snorus.com",
      "phone": "9205993325",
      "address": "914 Lott Street, Crisman, Kentucky, 1978"
    },
    {
      "id": "58a96cc79ec8fd6182cbab38",
      "picture": "http://bit.ly/1onMfJL",
      "name": "Danielle Dillard",
      "company": "DANCITY",
      "email": "danielledillard@dancity.biz",
      "phone": "8405833139",
      "address": "479 Randolph Street, Cleary, North Dakota, 712"
    }
  ];
});
