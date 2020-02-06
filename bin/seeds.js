const mongoose = require('mongoose')
const Place = require('./../models/Place')


const data = [
    {name:'1500 REFORMA 222',
    tipo:'Restaurantes que preparan otro tipo de alimentos para llevar',location:{address:'AVENIDA PASEO DE LA REFORMA COLONIA JUAREZ CUAUHTÉMOC CIUDAD DE MÉXICO CP6600',coordinates:[-99.1618184,19.4292252]}, rate: 4, avgPrice: 45, waitTime: '25 min'},
    {name:'50 FRIENDS CONDESA',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE CADEREYTA COLONIA CONDESA CUAUHTEMOC CIUDAD DE MÉXICO CP6140',coordinates:[-99.1727041,19.4125469]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'50 FRIENDS REFORMA',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'AVENIDA PASEO DE LA REFORMA COLONIA CUAUHTEMOC CUAUHTEMOC CIUDAD DE MÉXICO CP6600',coordinates:[-99.1675795,19.4260643]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'A BURGER RESTAURANTE',
    tipo:'hamburguesa papas',location:{address:'CALLE COAHUILA MANZANA TECNOCASA CUAUHTEMOC CIUDAD DE MÉXICO CP6760',coordinates:[-99.1647045,19.4107961]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'A FIORI GIRASOLI',
    tipo:'Restaurantes que preparan otro tipo de alimentos para llevar',location:{address:'CALLE CALLE INDEPENDENCIA COLONIA CENTR0 CUAUHTEMOC CIUDAD DE MÉXICO CP6010',coordinates:[-99.1443869,19.4332354]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ACA LAS TORTAS',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas',location:{address:'CALLE LUIS GONZALEZ OBREGON COLONIA CENTRO CUAUHTEMOC CIUDAD DE MÉXICO CP6010',coordinates:[-99.133584,19.4367749]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ACHICALADA GUERRERO CARNITAS',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'EJE VIAL 1 NORTE (MOSQUETA) COLONIA GUERRERO CUAUHTEMOC CIUDAD DE MÉXICO CP6300',coordinates:[-99.1444497,19.4449139]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ADELI CAFÉ',
    tipo:'Servicios de preparación de alimentos en unidades mï¿½viles',location:{address:'EJE VIAL 3 PONIENTE (RIO MISSISSIPI) COLONIA CUAUHTEMOC CUAUHTEMOC CIUDAD DE MÉXICO CP6500',coordinates:[-99.1733449,19.4281628]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ADMINISTRACIÓN DE AUTOCONSUMO ESCOLAR',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas sandwich',location:{address:'AVENIDA RIBERA DE SAN COSME COLONIA SANTA MARIA LA RIBERA CUAUHTEMOC CIUDAD DE MÉXICO CP6400',coordinates:[-99.1596855,19.4416092]}, rate: 5, avgPrice: 80, waitTime: ''},
    {name:'ADMINISTRACIÓN DE AUTOCONSUMO ESCOLAR',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas sandwich',location:{address:'AVENIDA RIBERA DE SAN COSME COLONIA SANTA MARIA LA RIBERA CUAUHTEMOC CIUDAD DE MÉXICO CP6400',coordinates:[-99.1596855,19.4416092]}, rate: 5, avgPrice: 80, waitTime: ''},
    {name:'ADMINISTRACIï¿½N LYNIS',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE Rï¿½O NAZAS COLONIA CUAUHTEMOC CUAUHTEMOC CIUDAD DE MÉXICO CP6500',coordinates:[-99.1664306,19.4325076]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'AGAPI MU RESTAURANTE GRIEGO',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE ALFONSO REYES COLONIA HIPODROMO DE LA CONDESA CUAUHTEMOC CIUDAD DE MÉXICO CP6170',coordinates:[-99.1781293,19.4094172]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'AGUAS FRESCAS',
    tipo:'Servicios de preparación de otros alimentos para consumo inmediato',location:{address:'AVENIDA FRAY SERVANDO TERESA DE MIER COLONIA ESPERANZA CUAUHTEMOC CIUDAD DE MÉXICO CP6840',coordinates:[-99.1270114,19.4228304]}, rate: 4, avgPrice: 35, waitTime: '10 min'},
    {name:'AGUAS FRESCAS',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas',location:{address:'AVENIDA FRAY SERVANDO TERESA DE MIER COLONIA OBRERA CUAUHTEMOC CIUDAD DE MÉXICO CP6820',coordinates:[-99.1377365,19.4239314]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'AGUAS FRESCAS SIN NOMBRE',
    tipo:'Servicios de preparación de otros alimentos para consumo inmediato',location:{address:'AVENIDA ARCOS DE BELEN COLONIA CENTRO (ÁREA 7) CUAUHTEMOC CIUDAD DE MÉXICO CP6070',coordinates:[-99.1428048,19.4269423]}, rate: 4, avgPrice: 35, waitTime: '10 min'},
    {name:'AGUAS SABORIZADAS ENBOTELLADAS',
    tipo:'Servicios de preparación de otros alimentos para consumo inmediato',location:{address:'CALLE HEROES COLONIA GUERRERO CUAUHTEMOC CIUDAD DE MÉXICO CP6300',coordinates:[-99.1450216,19.4487642]}, rate: 4, avgPrice: 35, waitTime: '10 min'},
    {name:'AGUAS Y LICUADOS SIN NOMBRE',
    tipo:'Restaurantes de autoservicio',location:{address:'CALLE FELIPE VILLANUEVA COLONIA PERALVILLO CUAUHTEMOC CIUDAD DE MÉXICO CP6220',coordinates:[-99.1316228,19.4625876]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'AIKO TAKITO',
    tipo:'Restaurantes de autoservicio',location:{address:'EJE VIAL CENTRAL (LAZARO CARDENAS) COLONIA CENTRO (ÁREA 2) CUAUHTEMOC CIUDAD DE MÉXICO CP6000',coordinates:[-99.1410535,19.4336123]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'AKARMAN VEGA FOOD',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE LUCERNA COLONIA JUAREZ CUAUHTEMOC CIUDAD DE MÉXICO CP6600',coordinates:[-99.1574453,19.4301981]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'AL DIWAN RESTAURANTE ÁRABE',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'EJE VIAL 1 PONIENTE (AVENIDA CUAUHTEMOC) COLONIA DOCTORES CUAUHTEMOC CIUDAD DE MÉXICO CP6720',coordinates:[-99.1541995,19.4175351]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'AL SASON DE JHON',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE CARLOS B. ZETINA COLONIA HIPODROMO CONDESA CUAUHTEMOC CIUDAD DE MÉXICO CP6170',coordinates:[-99.1814708,19.4100395]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'ALAMEDA W',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'AVENIDA JUAREZ COLONIA CENTRO CUAUHTEMOC CIUDAD DE MÉXICO CP6000',coordinates:[-99.1483884,19.4354325]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'ALAMEDA WING STOP',
    tipo:'alitas Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'AVENIDA JUAREZ COLONIA CENTRO CUAUHTEMOC CIUDAD DE MÉXICO CP6050',coordinates:[-99.143953,19.4332862]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'alitas ALAS DE ORO',
    tipo:'alitas Restaurantes con servicio de preparación de tacos y tortas',location:{address:'CALLE PRIVADA DOCTOR DURAN COLONIA DOCTORES CUAUHTEMOC CIUDAD DE MÉXICO CP6720',coordinates:[-99.1449889,19.4117357]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'alitas ALAS DE ORO',
    tipo:'alitas Restaurantes con servicio de preparación de tacos y tortas',location:{address:'CALLE DOCTOR MARQUEZ COLONIA DOCTORES CUAUHTEMOC CIUDAD DE MÉXICO CP6720',coordinates:[-99.1449937,19.4109702]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'alitas ALBA COCINA LOCAL',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE MARSELLA COLONIA JUAREZ CUAUHTEMOC CIUDAD DE MÉXICO CP6600',coordinates:[-99.1608318,19.4246173]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'ALBORADA GRILL',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE GABINO BARREDA COLONIA SAN RAFAEL CUAUHTEMOC CIUDAD DE MÉXICO CP6470',coordinates:[-99.16291,19.4411126]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'ALEBRIJE NEGRO CAFE',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'AVENIDA NUEVO LEON COLONIA HIPODROMO CUAUHTEMOC CIUDAD DE MÉXICO CP6100',coordinates:[-99.1716042,19.4044593]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'ALIMENTOS PREPARADOS',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas',location:{address:'CALLE SAN MIGUEL COLONIA CENTRO (ÁREA 2) CUAUHTEMOC CIUDAD DE MÉXICO CP6000',coordinates:[-99.1314836,19.424896]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ALIMENTOS PREPARADOS KISSANTEN GO KU TAKS',
    tipo:'Restaurantes de autoservicio',location:{address:'CALLE REPUBLICA DE URUGUAY COLONIA CENTRO (ÁREA 2) CUAUHTEMOC CIUDAD DE MÉXICO CP6000',coordinates:[-99.1408456,19.4310337]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ALIMENTOS Y ANTOJITOS MEXICANOS',
    tipo:'Restaurantes que preparan otro tipo de alimentos para llevar',location:{address:'CALLE TURIN COLONIA JUAREZ CUAUHTEMOC CIUDAD DE MÉXICO CP6600',coordinates:[-99.1547971,19.4264913]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ALITAS ASADAS SIN NOMBRE',
    tipo:'alitas Restaurantes con servicio de preparación de tacos y tortas',location:{address:'CALLE LUNA COLONIA GUERRERO CUAUHTEMOC CIUDAD DE MÉXICO CP6300',coordinates:[-99.1395678,19.4478955]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ALITAS EN FAST',
    tipo:'alitas Restaurantes de autoservicio',location:{address:'CALLE SANTA MARIA LA RIBERA COLONIA SANTA MARIA LA RIBERA CUAUHTEMOC CIUDAD DE MÉXICO CP6400',coordinates:[-99.157142,19.4483164]}, rate: 5, avgPrice: 80, waitTime: ''},
    {name:'ALITAS Y POSTRES CHARLY',
    tipo:'alitas Servicios de preparación de otros alimentos para consumo inmediato',location:{address:'CALLE JOSE MARIA ROA BARCENAS COLONIA OBRERA CUAUHTEMOC CIUDAD DE MÉXICO CP6800',coordinates:[-99.1419665,19.4118463]}, rate: 4, avgPrice: 35, waitTime: '10 min'},
    {name:'ALMA PURA',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE CAMPECHE MANZANA TECNOCASA CUAUHTEMOC CIUDAD DE MÉXICO CP6760',coordinates:[-99.1642929,19.4099783]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'ALMACï¿½N DEL RESTAURANTE LAS TORTULIAS DE MADERO',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas',location:{address:'CALLE FRANCISCO I. MADERO COLONIA CENTR0 CUAUHTEMOC CIUDAD DE MÉXICO CP6010',coordinates:[-99.1355672,19.4333794]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ALTA COCINA JAPONESA KABUKI SUSHI',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE COLIMA COLONIA ROMA NORTE CUAUHTEMOC CIUDAD DE MÉXICO CP6700',coordinates:[-99.1582846,19.4201753]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'AMADA',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE VICENTE SUAREZ COLONIA HIPODROMO CONDESA CUAUHTEMOC CIUDAD DE MÉXICO CP6149',coordinates:[-99.1784904,19.4129896]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'AMADO CAFÉ',
    tipo:'Restaurantes que preparan otro tipo de alimentos para llevar',location:{address:'CALLE JOSE ROSAS MORENO COLONIA SAN RAFAEL CUAUHTEMOC CIUDAD DE MÉXICO CP6470',coordinates:[-99.1621941,19.4357005]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'AMO AL GUSTO',
    tipo:'Restaurantes que preparan otro tipo de alimentos para llevar',location:{address:'CALLE AGUSTIN MELGAR COLONIA CONDESA CUAUHTEMOC CIUDAD DE MÉXICO CP6140',coordinates:[-99.1765488,19.4185739]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'AMOR DIDAS',
    tipo:'Restaurantes que preparan otro tipo de alimentos para llevar',location:{address:'AVENIDA RICARDO FLORES MAGON CONJUNTO HABITACIONAL NONOALCO TLATELOLCO CUAUHTEMOC CIUDAD DE MÉXICO CP6900',coordinates:[-99.1459306,19.4547226]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'AMOR TRANQUILO',
    tipo:'Restaurantes de autoservicio',location:{address:'CALLE ISABEL LA CATOLICA COLONIA OBRERA CUAUHTEMOC CIUDAD DE MÉXICO CP6800',coordinates:[-99.1381212,19.4185342]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'AMOUR CAFFE',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE NAPOLES COLONIA JUAREZ CUAUHTEMOC CIUDAD DE MÉXICO CP6600',coordinates:[-99.159132,19.4252302]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'AMPARO BURGER',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas',location:{address:'CALLE DOCTOR C. LICEAGA COLONIA DOCTORES CUAUHTEMOC CIUDAD DE MÉXICO CP6720',coordinates:[-99.1436779,19.4214587]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'AN - RA',
    tipo:'Restaurantes que preparan otro tipo de alimentos para llevar',location:{address:'CALLE JUAN HERNANDEZ Y DAVALOS COLONIA ALGARIN CUAUHTEMOC CIUDAD DE MÉXICO CP6880',coordinates:[-99.1371906,19.4061048]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANDO MAREADO',
    tipo:'Restaurantes con servicio de preparación de pescados y mariscos camarones quesadilla',location:{address:'CALLE SINDICALISMO COLONIA HIPODROMO CUAUHTEMOC CIUDAD DE MÉXICO CP6100',coordinates:[-99.172542,19.4040136]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANDRICIOS RESTAURANTE',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE COAHUILA COLONIA ROMA NORTE CUAUHTEMOC CIUDAD DE MÉXICO CP6700',coordinates:[-99.1616204,19.4115601]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'ANGELOPOLITANO ROMA',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE PUEBLA COLONIA ROMA NORTE CUAUHTEMOC CIUDAD DE MÉXICO CP6700',coordinates:[-99.1731952,19.4203368]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'ANGUS STEAK HOUSE',
    tipo:'Restaurantes de autoservicio',location:{address:'EJE VIAL 1 PONIENTE (AVENIDA CUAUHTEMOC) COLONIA ROMA CUAUHTEMOC CIUDAD DE MÉXICO CP6700',coordinates:[-99.1539017,19.4253541]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJERÍA CAMINOS DE MICHOACï¿½N',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'EJE VIAL 1 PONIENTE (GUERRERO) CONJUNTO HABITACIONAL NONOALCO TLATELOLCO CUAUHTEMOC CIUDAD DE MÉXICO CP6900',coordinates:[-99.1408649,19.4549264]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJERÍA EL TORO RICA PIZZA',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas',location:{address:'AVENIDA RIBERA DE SAN COSME COLONIA SANTA MARIA LA RIBERA CUAUHTEMOC CIUDAD DE MÉXICO CP6400',coordinates:[-99.1646787,19.4431726]}, rate: 5, avgPrice: 80, waitTime: ''},
    {name:'ANTOJERÍA L Y G',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE AGUSTIN MELGAR COLONIA CONDESA CUAUHTEMOC CIUDAD DE MÉXICO CP6140',coordinates:[-99.1763033,19.418448]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJERÍA LAS CHALUPITAS',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE ALFONSO REYES COLONIA HIPODROMO CUAUHTEMOC CIUDAD DE MÉXICO CP6100',coordinates:[-99.1725674,19.406413]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'ANTOJERÍA LOS PACOS',
    tipo:'Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida',location:{address:'CALLE GERANIO COLONIA ATLAMPA CUAUHTEMOC CIUDAD DE MÉXICO CP6450',coordinates:[-99.1495024,19.4589828]}, rate: 5, avgPrice: 70, waitTime: '25 min'},
    {name:'ANTOJERÍA MAMA SARITA',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE LOPEZ COLONIA CENTRO (ÁREA 5) CUAUHTEMOC CIUDAD DE MÉXICO CP6050',coordinates:[-99.1418975,19.4341357]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJERÍA MARGARITA',
    tipo:'Restaurantes que preparan otro tipo de alimentos para llevar',location:{address:'AVENIDA RIBERA DE SAN COSME COLONIA SAN RAFAEL CUAUHTEMOC CIUDAD DE MÉXICO CP6470',coordinates:[-99.1621409,19.4422738]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJERÍA MEXICANA',
    tipo:'Restaurantes de autoservicio',location:{address:'CALLE ISABEL LA CATOLICA COLONIA CENTR0 CUAUHTEMOC CIUDAD DE MÉXICO CP6010',coordinates:[-99.1374257,19.4259797]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJERÍA REFORMA',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas',location:{address:'CALLE PEDRO MORENO COLONIA GUERRERO CUAUHTEMOC CIUDAD DE MÉXICO CP6300',coordinates:[-99.1438501,19.4413361]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJERÍA Y COMIDAS',
    tipo:'Restaurantes de autoservicio',location:{address:'CALLE MINA COLONIA GUERRERO CUAUHTEMOC CIUDAD DE MÉXICO CP6300',coordinates:[-99.1415736,19.4388068]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJERÍA Y ROSTICERIA VIC',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'AVENIDA ARCOS DE BELEN COLONIA CENTRO (ÁREA 7) CUAUHTEMOC CIUDAD DE MÉXICO CP6070',coordinates:[-99.1428048,19.4269423]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITO MARTÍNEZ',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas',location:{address:'AVENIDA FRAY SERVANDO TERESA DE MIER COLONIA ESPERANZA CUAUHTEMOC CIUDAD DE MÉXICO CP6840',coordinates:[-99.127013,19.4228306]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE LUIS GONZALEZ OBREGON COLONIA CENTRO CUAUHTEMOC CIUDAD DE MÉXICO CP6010',coordinates:[-99.1336051,19.4367777]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'AVENIDA RIBERA DE SAN COSME COLONIA SAN RAFAEL CUAUHTEMOC CIUDAD DE MÉXICO CP6470',coordinates:[-99.1621409,19.4422738]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE RIO TIGRIS COLONIA CUAUHTEMOC CUAUHTEMOC CIUDAD DE MÉXICO CP6500',coordinates:[-99.1668372,19.4299099]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE LUDWING VAN BEETHOVEN COLONIA PERELVILLO CUAUHTEMOC CIUDAD DE MÉXICO CP6220',coordinates:[-99.1301134,19.4598983]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE TOLTECAS COLONIA MORELOS CUAUHTEMOC CIUDAD DE MÉXICO CP6200',coordinates:[-99.1277347,19.4465764]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE XOCONGO COLONIA TRANSITO CUAUHTEMOC CIUDAD DE MÉXICO CP6820',coordinates:[-99.1322919,19.4159202]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS',
    tipo:'Restaurantes de autoservicio',location:{address:'CALLE TURIN COLONIA JUAREZ CUAUHTEMOC CIUDAD DE MÉXICO CP6600',coordinates:[-99.1547971,19.4264913]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE CONSTANCIA COLONIA MORELOS CUAUHTEMOC CIUDAD DE MÉXICO CP6200',coordinates:[-99.1262555,19.449353]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas',location:{address:'CALLE REPUBLICA DE BOLIVIA COLONIA CENTR0 CUAUHTEMOC CIUDAD DE MÉXICO CP6010',coordinates:[-99.1304634,19.4390847]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS A LA MEXICANA',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE SANTA MARIA LA RIBERA COLONIA SANTA MARIA LA RIBERA CUAUHTEMOC CIUDAD DE MÉXICO CP6400',coordinates:[-99.1581652,19.4428332]}, rate: 5, avgPrice: 80, waitTime: ''},
    {name:'ANTOJITOS ABRAHAM',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas',location:{address:'CALLE REPUBLICA DE ARGENTINA COLONIA CENTRO (ÁREA 3) CUAUHTEMOC CIUDAD DE MÉXICO CP6020',coordinates:[-99.131537,19.4374666]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS ALE',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE FELIPE VILLANUEVA COLONIA PERALVILLO CUAUHTEMOC CIUDAD DE MÉXICO CP6220',coordinates:[-99.1330061,19.4628645]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS ANDALUZ',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE CAMELIA COLONIA GUERRERO CUAUHTEMOC CIUDAD DE MÉXICO CP6300',coordinates:[-99.1411279,19.4461146]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS ANTONIA',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE LORENZO BOTURINI COLONIA ESPERANZA CUAUHTEMOC CIUDAD DE MÉXICO CP6840',coordinates:[-99.1283541,19.417517]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS CAMPECHE',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE CAMPECHE MANZANA TECNOCASA CUAUHTEMOC CIUDAD DE MÉXICO CP6760',coordinates:[-99.1652432,19.4097907]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS CHABACANO',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'EJE VIAL 3 SUR (CALZADA DE CHABACANO) CIUDAD AMPL ASTURIAS CUAUHTEMOC CIUDAD DE MÉXICO CP6890',coordinates:[-99.1338634,19.408392]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS CHAVA',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas',location:{address:'CALLE DOCTOR FEDERICO GOMEZ UGARTE SANTOS COLONIA DOCTORES CUAUHTEMOC CIUDAD DE MÉXICO CP6720',coordinates:[-99.1465542,19.408363]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS CHAYITO',
    tipo:'Restaurantes que preparan otro tipo de alimentos para llevar',location:{address:'CALLE 16 DE SEPTIEMBRE COLONIA CENTR0 CUAUHTEMOC CIUDAD DE MÉXICO CP6010',coordinates:[-99.1406524,19.4326653]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS COTY',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'EJE VIAL CENTRAL (LAZARO CARDENAS) COLONIA OBRERA CUAUHTEMOC CIUDAD DE MÉXICO CP6800',coordinates:[-99.1442966,19.4093867]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS DANY',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE INDEPENDENCIA COLONIA CENTRO (ÁREA 2) CUAUHTEMOC CIUDAD DE MÉXICO CP6000',coordinates:[-99.1474438,19.433679]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS DAYNA',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE ERNESTO PUGIBET COLONIA CENTRO CUAUHTEMOC CIUDAD DE MÉXICO CP6010',coordinates:[-99.1443786,19.4297033]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS DIAZ',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas',location:{address:'CALLE JUAN JOSE BAZ COLONIA CENTRO (ÁREA 9) CUAUHTEMOC CIUDAD DE MÉXICO CP6090',coordinates:[-99.1277013,19.4268448]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS DON CHUCHO',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE LUDWING VAN BEETHOVEN COLONIA PERELVILLO CUAUHTEMOC CIUDAD DE MÉXICO CP6220',coordinates:[-99.1301134,19.4598983]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS DON RAFA',
    tipo:'Restaurantes de autoservicio',location:{address:'CALLE LUDWING VAN BEETHOVEN COLONIA PERALVILLO CUAUHTEMOC CIUDAD DE MÉXICO CP6220',coordinates:[-99.1407672,19.461725]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS DON ROBERT',
    tipo:'Restaurantes de autoservicio',location:{address:'CALLE PLOMO CIUDAD VALLE GOMEZ CUAUHTEMOC CIUDAD DE MÉXICO CP6240',coordinates:[-99.1251268,19.4575088]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS DON TOMAS',
    tipo:'Restaurantes que preparan otro tipo de alimentos para llevar',location:{address:'CALLE RIO LERMA COLONIA CUAUHTEMOC CUAUHTEMOC CIUDAD DE MÉXICO CP6500',coordinates:[-99.1667467,19.4295698]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS DOÑA CRISTY',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'AVENIDA JOSE MARIA IZAZAGA COLONIA CENTRO ZOCALO CUAUHTEMOC CIUDAD DE MÉXICO CP6000',coordinates:[-99.1321232,19.4256941]}, rate: 5, avgPrice: 80, waitTime: ''},
    {name:'ANTOJITOS DOÑA JOSE',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE CLAUDE DEBUSSY COLONIA PERALVILLO CUAUHTEMOC CIUDAD DE MÉXICO CP6220',coordinates:[-99.1400794,19.4610546]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS DOÑA NATY',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'PEATONAL PLAZA GARIBALDI COLONIA CENTRO CUAUHTEMOC CIUDAD DE MÉXICO CP6010',coordinates:[-99.1391268,19.4409363]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS EL MANA',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'EJE VIAL 1 PONIENTE (GUERRERO) CONJUNTO HABITACIONAL NONOALCO TLATELOLCO CUAUHTEMOC CIUDAD DE MÉXICO CP6900',coordinates:[-99.1450331,19.4538464]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS EL MOï¿½O',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE LUDWING VAN BEETHOVEN COLONIA PERELVILLO CUAUHTEMOC CIUDAD DE MÉXICO CP6220',coordinates:[-99.1301134,19.4598983]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS EL PERPETUO SOCORRO',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE SANTISIMA COLONIA CENTRO (ÁREA 2) CUAUHTEMOC CIUDAD DE MÉXICO CP6000',coordinates:[-99.1270102,19.4324623]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS EL TIGRE',
    tipo:'Restaurantes con servicio de preparación de tacos y tortas',location:{address:'CALLE REPUBLICA DE URUGUAY COLONIA CENTRO CUAUHTEMOC CIUDAD DE MÉXICO CP6010',coordinates:[-99.1351689,19.430318]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS EL TRIUNFO',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE REPUBLICA DE VENEZUELA COLONIA CENTRO CUAUHTEMOC CIUDAD DE MÉXICO CP6010',coordinates:[-99.1280496,19.4369701]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS ELI',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'CALLE PUEBLA COLONIA ROMA NORTE CUAUHTEMOC CIUDAD DE MÉXICO CP6700',coordinates:[-99.158315,19.4231767]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS ELOISA',
    tipo:'Restaurantes con servicio de preparación de antojitos',location:{address:'EJE VIAL 2 NORTE (MANUEL GONZALEZ) COLONIA SAN SIMON TOLNAHUAC CUAUHTEMOC CIUDAD DE MÉXICO CP6920',coordinates:[-99.1455681,19.4566003]}, rate: 5, avgPrice: 50, waitTime: ''},
    {name:'ANTOJITOS ELY',
    tipo:'Restaurantes que preparan otro tipo de alimentos para llevar',location:{address:'CALLE HEROES COLONIA GUERRERO CUAUHTEMOC CIUDAD DE MÉXICO CP6300',coordinates:[-99.1451259,19.448861]}, rate: 5, avgPrice: 50, waitTime: ''}
]

mongoose
  .connect('mongodb://localhost/cornerfood', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Place.create(data).then(res => console.log('Data in DB'))
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

