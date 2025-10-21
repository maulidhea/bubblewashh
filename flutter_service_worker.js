'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "ee88bc7030fdbc08a4626f740ae935fe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2bec561178a8e759ada1413d227126e1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a2b2dcbd8ad358c81956ed27ea4c8bea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7401a9b0ae97745fa599f04a8d0a0375",
".git/logs/refs/heads/main": "23d9089de8e8b4de6c9b2e9916ca3c63",
".git/logs/refs/remotes/origin/main": "08722dafc5b433c08b337bd68d35eacc",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0a/a454c437fdbd077f7af676ddd3aaaba7d1bf54": "e3cbc4bac888b85b1f0691c36b20b93e",
".git/objects/0f/284591b19c7c91bd8f6a09133eee7eb9b8a222": "2ed5a8646c750163fe8fee5b77967ae3",
".git/objects/0f/9e0981f21b1036d96af4d56b30b1da30839191": "7b163f8d991775716e665a192b23aa37",
".git/objects/12/afd337a1406325fbe50918b162b1ebca81da9a": "62cc94852db9705bf52658a2b1b25831",
".git/objects/16/2b03639efe8aacb6b55cf613bb1f61c2696c4d": "ba6d518e43e945e67f6f72c83048c191",
".git/objects/17/e67b66d53cc4afc0b8ec107a59e1a39a21d06a": "0e5913fe64d2ec8bbcf91efca0b34df4",
".git/objects/18/d75f2579ff93a948f1cf919e8cbe66e3d40eac": "0d873fb88eb6ec1eab00e536272d3c7f",
".git/objects/19/3cc35c383658872705ede6c273cff0d381a596": "a627824043b01d643770fb46c9022178",
".git/objects/19/8ed0abcab008cfc2a853073cc60d5634ddc4eb": "1f77e0bd041ffb7acc8ef19424f9dd8c",
".git/objects/1b/d08bfa5783f9013b926cb4347fdfe1b77ffdca": "5c4af382a7754347b6cf7fc55c8aa7f2",
".git/objects/1e/e0b8f469f72392ebcdf3a4c2a3c23f6c32ad1d": "e012a92b0fcc2fa1c7a93620c8e0b5e6",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/28/318715dbb232bb89a6e64a4afdd12137d0eda1": "2f7d6262af8be2174cb5a3a82005f32f",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2f/93fc41ae2e2be80084077d64f6bbc34240e328": "aac5392b6bce579bc2a158217385ecbd",
".git/objects/31/49fb8e88240a7a4b97ecbad4299c0f7c410c25": "43fd83460cee66894e294f4d112b35f4",
".git/objects/32/66b95a7bb2c8402baac61e566bfb29dece25d0": "dbbf3f59251e2f24f792f2316b7232e0",
".git/objects/32/73c095b73006ca86b22b66eb762be34cb597c5": "2fff65c2461bce9eb6a7e8f0016c32c1",
".git/objects/35/c092e1e4259e3f7669fc3406da9af7338b80af": "bc119a0dccb3c3ae19d481f2711aba5b",
".git/objects/38/2411a9b305f85a4cbbcf2d54a4098ae873f3c7": "5cb170c26eceacc630e14dfa9c422922",
".git/objects/38/7656f1d33797b3eaf05a4d06523ceb80b43142": "822217059a5da8b63f4f804ca5cf42c0",
".git/objects/3f/42546089afcb36b0ca7013ac3118599936812f": "2042a85c4d56c5b86c0abfc25a12a624",
".git/objects/42/bba2f5af257dd3440c9b5d28afb3cc420fea89": "c592e026433b6de4c38a64b175cde17c",
".git/objects/45/4ff73ce985bd5b13cbf67579393b294ffd5213": "fe17261c52b6e95b20a72d0f6c185d03",
".git/objects/47/9e15681633605d3f77c2e4a108f30da1edea48": "87a9527a8504e915a92450028defa393",
".git/objects/4c/8a9c2e0e6b0a3aed6eb9108bac06ef2e79a8fe": "0f3ed716d7c20e9baf296ec2dbbf4a29",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/de1cbd05b350e13b63c904bc893ea87114c5f9": "3660bec2e6c5496977a9ac126566f35a",
".git/objects/59/0587415c1ee338196ac4f9258e22705662e4af": "3126dfdfc2dd9ac62c03a47dcd516324",
".git/objects/5a/3557149cc5ef6080c7ef9ffd2bd54d9a566edb": "7c59f85f4d3f3e6221bdea0930908da0",
".git/objects/5f/4a8a0693fe9910603f92237c82f43225d0630c": "f28de664191885b618e4dbb4d3da0c65",
".git/objects/60/0934e8c2ae752a393eda80baef2ae453929f42": "a0498f267df4c61aeaecaa17a67a237e",
".git/objects/61/6b1397849ace063a183f3a8c1e5ac55e3f948b": "141003fb45ad02653aa2aaa2e1f6c18b",
".git/objects/64/2023aecd814386c8cfbde69377b70a216253dd": "c79be31ee05a306bd6fb56c055368116",
".git/objects/66/2629d55cafa71d973fef774929479b9789e1ad": "f16db77bb381fc27a69b8178de4c069b",
".git/objects/66/9de0ad8730a91d5dfa40e9d7e397db9f7a924d": "9080aee60a6e19f542a9de7714dc0aab",
".git/objects/66/fc3b84b4cc6f1cce286ac4b55415c9a18d3298": "07f25a5813c13eb8399e341580c24237",
".git/objects/69/24572a54856732fd6f6412a364fba1c72b80b9": "f9bee5209cb3dba03d24540c7b87c3d7",
".git/objects/6b/3373285c896848e3e329974731740a59307bb9": "3a7c8d27d3fdb3b44909e6a427dcf14f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/9b6d8fa114029a2779da362578b51c7d754cd1": "1fd937f93a97dae330d28460106442af",
".git/objects/6c/c313e7fc5c56dbcaa09ece9d35dc8481b03d79": "42111795961fba2dbcaaed49bca678e3",
".git/objects/6d/0b3ff761b5df2011654ef5ed930d66c5bd1982": "a7eabf00bb4b97409aa25a1f780312fa",
".git/objects/72/813fb3f0705c976cac778443e2f6196efe5bb3": "c6f6396dcc710dd53687fb375965cd0d",
".git/objects/74/c614ebb349965fa7ccba243713a403175bc7e4": "d67c3f18221bab6c5cff3a4b26ad94c8",
".git/objects/76/36f23a92f98a81271a817460c0653f2a48da38": "33a45a21cbb92e54e9b3b8a713b278b5",
".git/objects/76/61bec3321ff94ec0c61f4700bb7171080ea152": "b4efe0aec7d1bb7cdf20bd22e504be12",
".git/objects/78/1eb44b20c4f3981cf029c69b483b254b6233b8": "59c8b06016cac2c71ef149a3c48c003e",
".git/objects/78/47f2f7da3b51a45672126659b95a0e046d2471": "5c22e521de0ec378b127a647e3864c91",
".git/objects/7a/63c10da4dc2cd45cd91b1d6b1eb8a24543afe3": "0064d63a49d783162e83fcf1027ad2f6",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/940af37149273e052cf0c8fe913cf4d70415ea": "326e2ed52f7764892647b0a6481d66a6",
".git/objects/7f/c7f444202f198a93cbd7c2f2f43dbd6b84dd4b": "fd50619c3ff10b7c9f624d8d853a1723",
".git/objects/81/ba5936928e6734f76c83017ac1ff8fcd825880": "3f99bbf5296e793a2024d8be0b0524f0",
".git/objects/84/954ca07547674f07e2aab747e45d4ab68b6980": "e4ede976b68650a2c857c7d4fda01925",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/85cae1e2ad87dceb06e928fed87dfbd4ff49f8": "17e1c49ad6c8944481b8ed3921cdaea5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/5c080ec4ea16fa62ed347c7c60269076f5c97e": "2bb4c281c56f878de80ce6ad8313e2bf",
".git/objects/8f/372fa753f392e2836eca1f07966a8b1db6c964": "65f6b28ae6dc6962ec89487121035021",
".git/objects/94/edf9cd742c7cbf10423991475cd9aebec83f9e": "29ef120815ffb06fedc21061faa18a5d",
".git/objects/95/4c0e32f4a0887f1b83f66d69beb79131680543": "a2e31c9b31a15050f973221b5a10f153",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/3fe57d460f255b9dde9e1a95d461cff0f513e6": "68b242f84e510bf990fd7637256c4c81",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/f94c15e8a36b13f3c4e700e76d92aec4dba0dc": "a5ea678680e0581d0858e1b605421395",
".git/objects/a1/930c12ed610a147c4b3bb14499378e0dab06d9": "cf04438d9559499ca4ab379fa1595df3",
".git/objects/a4/447e7cc882bdf3e37f001c4b0d59c1e271b48f": "9249c44fea41842b1c719fc6a905b55f",
".git/objects/a7/8a4d5472295123691b43f3408c70edfcf90a92": "a6c5510464f1073db471bce1befc72ee",
".git/objects/a8/b5342d3d372023d9265c1e30e0fb523cc5a67d": "3dd6c615c90959945d0f62352bad3fba",
".git/objects/a9/b473b0e856a1f9de262316ac679690369bb558": "88fd8bc156aad7ff514ca5842af2610e",
".git/objects/ab/69833091e54f340da650f5650e243bfcb68a01": "7d2a8cac742fabc71ba1523a59584462",
".git/objects/b3/9ac735b491bb56a1f58802d4000527da0a22d1": "0844f8078d12cf271c6da47c829f1063",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/370d559fcb6a4021424ad0e338e3b2a671e633": "a17ddd819b9bcfa2c917c18e64ad6e33",
".git/objects/bb/415bd258f815b85535b41c4220608064fe7566": "05e58942681897368baf418369979de4",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/bf/761d060c76120fb9df906e36eac71b664e4a84": "dd5f71b1a0ef3fdc5b356de176a392fe",
".git/objects/c0/266f99797c99add19f2680f63cbe848a75755f": "fce56a58101047d0de5e727567f524cc",
".git/objects/c2/fe365b8eab74955c59ec681a9737008dc921d0": "de27479f70c34ea89b723182caf0a13b",
".git/objects/c3/3d1929ff8f8775a6c8667fee2f84e6837fbf03": "a50ae9b8d3837ac0392e22702bcdbfff",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c8/b93269bf3745930ca20d020b25d29e3eb5fc97": "8a4cf3c6acb2234c553dd6798c4769c8",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ce/5a17c8ef39407ed07d72c57650bcfd27a20a7f": "0a647ab516fc28cfae13974503339616",
".git/objects/cf/a2ff1db0bb2d2931dd0ba004884be95273c03e": "cde0eb1fad75dea2babaae3a53120ec1",
".git/objects/d0/c4051d74c6920bb5de632163dc676b162ac570": "cf4629ccd941ad17d773469d2d6546fa",
".git/objects/d1/002e4be05a97768f4975bf3cfb15472113cb9e": "47edd3f3fe1bb4fc2e4eebc2d429428e",
".git/objects/d2/2caafea6934fdfc8a70b0f43a7db479f42ccf5": "99b64032a1873f230002f933bcacfd7f",
".git/objects/d4/22bfe326098d1be41bd5d77779586945aa85f5": "b72b1c3c73548e8a4d11d57b5527a0cc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c3885eb5fac4cdeef4737cb58febf371b7c64e": "edc45c472dcca0ad3ec4eeab445fc898",
".git/objects/dd/5c88830740fb4fa541e89c762b5c6b72900312": "5e82b901c3502bf776aacedf7498143b",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/e0/2f849565c8180d5c09c8a3c1a347bc55ad6f50": "3a4f588bfdfb569dbc5ece37f2352814",
".git/objects/e0/8a03869d3bc8c955b96ce0234a929b4c615ae7": "8baff7df573c26b9d5936b7bff262f2e",
".git/objects/e1/ed99df7893fbaf4ff5ecd42e6561b9774aa57d": "58c4a2e34dcd5c9a8e6ee7e9cc341236",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/f33b5a739184b5b8c70e74d9ab5ebd76e07dc0": "228963a590a5cedea1c714b9fe8aa1ee",
".git/objects/e8/b445697607212eae2464ad22b1e7000f217f43": "fc1644e0595518ba340ab9e9ee692e08",
".git/objects/e9/2aa835e59016f2dda51a3f458c424be305c669": "13390d9d10ee8a7badf4ad49ac298ca2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/fdbc77ec342a9faba81ae3eb142c2b20cd1b15": "64bec4dee7cadae657d8030165a96f1e",
".git/objects/ec/a406e17b3ccc7ab5c693e691d004064935cc2a": "2c52d429da9ec2248f3587374a3dd0f7",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/f603a4f34c032c6c0b09e3f87d9aa3a9650a47": "732f0918763cf7273255c53b560e6334",
".git/objects/f1/4ccac9deb152a3e5ff900eb10c21c62ee1b541": "be1364b9498252ae80ada0ffc0392a40",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/ae3513fd73d809ca43b29d68d5fdf0bf2bb638": "31fb11002a30a986ab90405dba8965c0",
".git/objects/f7/289333e4c2260e33a0cf4c8b849973bbc43513": "2ddf77f415e095df50a51687720e1b4f",
".git/objects/fb/9b00e779b390e37b28919a1654b2ae92969ffb": "0c612b20951532019f92e9f05b9dc179",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/fd/9ccf0dd3c2de713b735fd6aff22d51bc3b2e82": "6f31c2740be94fffc5cec2c2d1e2336a",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/ORIG_HEAD": "a54f3b1f7c795d609029c9b53d9e5a4e",
".git/refs/heads/main": "960e7b1246b2d9b3214db9ba1587be15",
".git/refs/remotes/origin/main": "960e7b1246b2d9b3214db9ba1587be15",
"assets/AssetManifest.bin": "501480078bec62396e4fa1e64ef56388",
"assets/AssetManifest.bin.json": "33995383977a496c070b6d685cbee06d",
"assets/AssetManifest.json": "549f24bcfb9913f200a242a4baf32809",
"assets/assets/logo.png": "8d21d1a01111458b4ce47de4ba0e29f8",
"assets/FontManifest.json": "97c2528ecc2fbf4093965257fdba1854",
"assets/fonts/MaterialIcons-Regular.otf": "f7dd37413b5e49ffd588e603f3195277",
"assets/NOTICES": "75c1325ccdc0c9d75887f792c52e8662",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "89cc00c26b7872362a70f242e78fca0e",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "6a6d7b3556ac3c2bdfb68f3772d47d49",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "5cc139c52966ffe216bd72268ec1483e",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "96935174ad228990ba82784868ebc774",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "acfffd1a083ede0eda1ab3d5f3f26ff8",
"/": "acfffd1a083ede0eda1ab3d5f3f26ff8",
"main.dart.js": "4a62fc4dbff4459e2730ead7bab821fc",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
