"use strict";(self.webpackChunkdizo_ng=self.webpackChunkdizo_ng||[]).push([[528],{7528:(T,a,g)=>{g.r(a),g.d(a,{ProductDetailModule:()=>s});var d=g(6019),u=g(125),Z=g(865);const n=[{path:"",component:(()=>{class i{constructor(o){this.router=o}ngOnInit(){this.colorid=localStorage.getItem("Xid"),this.color=localStorage.getItem("color"),this.backdata()}bookPro(){localStorage.setItem("Xid",this.colorid),localStorage.setItem("color",this.color),this.router.navigate(["/checkout"])}backdata(){1==this.colorid?this.dataValue="assets/img/home3/scooty-1.png":2==this.colorid?this.dataValue="assets/img/home3/scooty-4.png":3==this.colorid?this.dataValue="assets/img/home3/scooty-2.png":4==this.colorid&&(this.dataValue="assets/img/home3/scooty-3.png")}sProduct(o,e){console.log(o,e),localStorage.setItem("Xid",o),localStorage.setItem("color",e),this.router.navigate(["/checkout"])}}return i.\u0275fac=function(o){return new(o||i)(Z.Y36(u.F0))},i.\u0275cmp=Z.Xpm({type:i,selectors:[["app-product-detail"]],decls:275,vars:2,consts:[[1,"about-area-two","pt-15","pb-10","productMain"],[1,"container"],[1,"scetion-title","text-center"],[1,"row","pt-45"],[1,"col-lg-6"],[1,"about-service-text","abouServicesLeft"],[1,"row"],[1,"about-content"],[1,"about-btn"],["href","javascript:void(0);",1,"default-btn","know-more-btn",3,"click"],[1,"about-service-img","aboutScootysHome"],[1,"about-man-bg"],["alt","About Shape",1,"prdValues",3,"id","src"],[1,"about-area-two","pt-15","pb-10","secontSection"],[1,"row","pt-35"],[1,"col-lg-4"],["src","assets/img/home3/scooty-1.png","alt","About Shape",1,"sortImages"],[1,"col-lg-8"],[1,"col-lg-10"],[1,"about-area-two","pt-15","pb-10","thirdSection",2,"padding-top","60px"],["src","assets/img/home3/km.png","alt","About Shape"],[1,"about-area-two","pt-15","pb-10","fourthSection"],[1,"about-area-two","pt-15","pb-10","thirdSection"],[1,"container",2,"background","linear-gradient(270deg, #56D01C 22.51%, #36C6CF 102.92%)","box-shadow","4px -4px 4px rgba(0, 0, 0, 0.25), -4px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 4px rgba(0, 0, 0, 0.25), 4px 4px 4px rgba(0, 0, 0, 0.25)","border-radius","10px"],[1,"container",2,"background","linear-gradient(270deg, #FFC700 4.29%, #FFEFB5 64.86%, #FFF5CF 102.92%)","box-shadow","4px -4px 4px rgba(0, 0, 0, 0.25), -4px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 4px rgba(0, 0, 0, 0.25), 4px 4px 4px rgba(0, 0, 0, 0.25)","border-radius","10px"],[1,"container",2,"background","linear-gradient(270deg, #3F87F5 0%, #4D98C4 43.96%, #36C6CF 102.92%)","box-shadow","4px -4px 4px rgba(0, 0, 0, 0.25), -4px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 4px rgba(0, 0, 0, 0.25), 4px 4px 4px rgba(0, 0, 0, 0.25)","border-radius","10px"],[1,"container",2,"background","#ffffff"],[1,"about-content","pdescription"],[1,"prdColor"],[1,"col-lg-5"],[1,"row","colorCodes"],[1,"bx","bxs-circle","clsRed",2,"padding-left","3px"],[1,"bx","bxs-circle","clsGreen"],[1,"bx","bxs-circle","clsBlue"],[1,"bx","bxs-circle","clsBlack",2,"padding-left","7px"],[1,"about-area-two","pt-15","pb-10","emiOptions"],[1,"col-lg-3"],[1,"about-man-bgs"],["src","assets/img/home3/SBI-Logo.png","alt","About Shape"],["src","assets/img/home3/Yes-Bank-Logo.png","alt","About Shape"],["src","assets/img/home3/BOB-logo.png","alt","About Shape"],["src","assets/img/home3/Indian-Bank.png","alt","About Shape"],[1,"row","pt-45","paddintTop"],[1,"about-service-img","aboutScootysHome","sProducts"],["data-id","1","data-color","red","src","assets/img/home3/scooty-1.png","alt","About Shape"],[1,"about-btn",3,"click"],["href","javascript:void(0)",1,"default-btn","know-more-btn"],["data-id","2","data-color","white","src","assets/img/home3/scooty-4.png","alt","About Shape"],["data-id","3","data-color","grey","src","assets/img/home3/scooty-2.png","alt","About Shape"]],template:function(o,e){1&o&&(Z.TgZ(0,"div",0),Z.TgZ(1,"div",1),Z.TgZ(2,"div",2),Z.TgZ(3,"span"),Z._uU(4,"Lio Nio 9"),Z.qZA(),Z.TgZ(5,"h2"),Z._uU(6,"Beast Features Available in Best Price"),Z.qZA(),Z.qZA(),Z.TgZ(7,"div",3),Z.TgZ(8,"div",4),Z.TgZ(9,"div",5),Z.TgZ(10,"div",6),Z.TgZ(11,"div",7),Z.TgZ(12,"h2"),Z._uU(13,"Ex-Showroom price:"),Z.qZA(),Z.TgZ(14,"p"),Z._uU(15,"Rs.69,000.00"),Z.qZA(),Z.TgZ(16,"h2"),Z._uU(17,"Booking Amount"),Z.qZA(),Z.TgZ(18,"p"),Z._uU(19,"Rs. 999"),Z.qZA(),Z.TgZ(20,"p"),Z._uU(21,"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "),Z.qZA(),Z.TgZ(22,"div",8),Z.TgZ(23,"a",9),Z.NdJ("click",function(){return e.bookPro()}),Z._uU(24,"Book Now"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(25,"div",4),Z.TgZ(26,"div",10),Z.TgZ(27,"div",11),Z._UZ(28,"img",12),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(29,"div",13),Z.TgZ(30,"div",1),Z.TgZ(31,"div",14),Z.TgZ(32,"div",15),Z.TgZ(33,"div",10),Z.TgZ(34,"div",11),Z._UZ(35,"img",16),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(36,"div",17),Z.TgZ(37,"div",5),Z.TgZ(38,"div",6),Z.TgZ(39,"div",18),Z.TgZ(40,"div",7),Z.TgZ(41,"h2"),Z._uU(42,"Designed for Generations"),Z.qZA(),Z.TgZ(43,"p"),Z._uU(44,"Believe in a product that goes a long way. Our scooters have been carefully designed with best in class technology."),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(45,"div",19),Z.TgZ(46,"div",1),Z.TgZ(47,"div",14),Z.TgZ(48,"div",4),Z.TgZ(49,"div",5),Z.TgZ(50,"div",6),Z.TgZ(51,"div",18),Z.TgZ(52,"div",7),Z.TgZ(53,"h2"),Z._uU(54,"RANGE"),Z.qZA(),Z.TgZ(55,"p"),Z._uU(56,"Believe in a product that goes a long way. Our scooters have been carefully designed with best in class technology."),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(57,"div",4),Z.TgZ(58,"div",10),Z.TgZ(59,"div",11),Z._UZ(60,"img",20),Z.TgZ(61,"p"),Z._uU(62,"160KM"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(63,"div",21),Z.TgZ(64,"div",1),Z.TgZ(65,"div",14),Z.TgZ(66,"div",4),Z.TgZ(67,"div",10),Z.TgZ(68,"div",11),Z._UZ(69,"img",20),Z.TgZ(70,"p"),Z._uU(71,"160KM"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(72,"div",4),Z.TgZ(73,"div",5),Z.TgZ(74,"div",6),Z.TgZ(75,"div",18),Z.TgZ(76,"div",7),Z.TgZ(77,"h2"),Z._uU(78,"RANGE"),Z.qZA(),Z.TgZ(79,"p"),Z._uU(80,"Believe in a product that goes a long way. Our scooters have been carefully designed with best in class technology."),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(81,"div",22),Z.TgZ(82,"div",23),Z.TgZ(83,"div",14),Z.TgZ(84,"div",4),Z.TgZ(85,"div",5),Z.TgZ(86,"div",6),Z.TgZ(87,"div",18),Z.TgZ(88,"div",7),Z.TgZ(89,"h2"),Z._uU(90,"RANGE"),Z.qZA(),Z.TgZ(91,"p"),Z._uU(92,"Believe in a product that goes a long way. Our scooters have been carefully designed with best in class technology."),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(93,"div",4),Z.TgZ(94,"div",10),Z.TgZ(95,"div",11),Z._UZ(96,"img",20),Z.TgZ(97,"p"),Z._uU(98,"160KM"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(99,"div",21),Z.TgZ(100,"div",24),Z.TgZ(101,"div",14),Z.TgZ(102,"div",4),Z.TgZ(103,"div",10),Z.TgZ(104,"div",11),Z._UZ(105,"img",20),Z.TgZ(106,"p"),Z._uU(107,"160KM"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(108,"div",4),Z.TgZ(109,"div",5),Z.TgZ(110,"div",6),Z.TgZ(111,"div",18),Z.TgZ(112,"div",7),Z.TgZ(113,"h2"),Z._uU(114,"RANGE"),Z.qZA(),Z.TgZ(115,"p"),Z._uU(116,"Believe in a product that goes a long way. Our scooters have been carefully designed with best in class technology."),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(117,"div",22),Z.TgZ(118,"div",25),Z.TgZ(119,"div",14),Z.TgZ(120,"div",4),Z.TgZ(121,"div",5),Z.TgZ(122,"div",6),Z.TgZ(123,"div",18),Z.TgZ(124,"div",7),Z.TgZ(125,"h2"),Z._uU(126,"RANGE"),Z.qZA(),Z.TgZ(127,"p"),Z._uU(128,"Believe in a product that goes a long way. Our scooters have been carefully designed with best in class technology."),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(129,"div",4),Z.TgZ(130,"div",10),Z.TgZ(131,"div",11),Z._UZ(132,"img",20),Z.TgZ(133,"p"),Z._uU(134,"160KM"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(135,"div",22),Z.TgZ(136,"div",26),Z.TgZ(137,"div",14),Z.TgZ(138,"div",4),Z.TgZ(139,"div",5),Z.TgZ(140,"div",6),Z.TgZ(141,"div",18),Z.TgZ(142,"div",27),Z.TgZ(143,"h2"),Z._uU(144,"Description:"),Z.qZA(),Z.TgZ(145,"p"),Z._uU(146,"Charging Time: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),Z.TgZ(147,"span"),Z._uU(148,"80% in 1 Hour (100% in 3-4 Hour)"),Z.qZA(),Z.qZA(),Z.TgZ(149,"p"),Z._uU(150,"Charging Time: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),Z.TgZ(151,"span"),Z._uU(152,"80% in 1 Hour (100% in 3-4 Hour)"),Z.qZA(),Z.qZA(),Z.TgZ(153,"p"),Z._uU(154,"Charging Time: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),Z.TgZ(155,"span"),Z._uU(156,"80% in 1 Hour (100% in 3-4 Hour)"),Z.qZA(),Z.qZA(),Z.TgZ(157,"p"),Z._uU(158,"Charging Time: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),Z.TgZ(159,"span"),Z._uU(160,"80% in 1 Hour (100% in 3-4 Hour)"),Z.qZA(),Z.qZA(),Z.TgZ(161,"p"),Z._uU(162,"Charging Time: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),Z.TgZ(163,"span"),Z._uU(164,"80% in 1 Hour (100% in 3-4 Hour)"),Z.qZA(),Z.qZA(),Z.TgZ(165,"p"),Z._uU(166,"Charging Time: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),Z.TgZ(167,"span"),Z._uU(168,"80% in 1 Hour (100% in 3-4 Hour)"),Z.qZA(),Z.qZA(),Z.TgZ(169,"p"),Z._uU(170,"Charging Time: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),Z.TgZ(171,"span"),Z._uU(172,"80% in 1 Hour (100% in 3-4 Hour)"),Z.qZA(),Z.qZA(),Z.TgZ(173,"p"),Z._uU(174,"Charging Time: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),Z.TgZ(175,"span"),Z._uU(176,"80% in 1 Hour (100% in 3-4 Hour)"),Z.qZA(),Z.qZA(),Z.TgZ(177,"p"),Z._uU(178,"Charging Time: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),Z.TgZ(179,"span"),Z._uU(180,"80% in 1 Hour (100% in 3-4 Hour)"),Z.qZA(),Z.qZA(),Z.TgZ(181,"p"),Z._uU(182,"Charging Time: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),Z.TgZ(183,"span"),Z._uU(184,"80% in 1 Hour (100% in 3-4 Hour)"),Z.qZA(),Z.qZA(),Z.TgZ(185,"p"),Z._uU(186,"Charging Time: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),Z.TgZ(187,"span"),Z._uU(188,"80% in 1 Hour (100% in 3-4 Hour)"),Z.qZA(),Z.qZA(),Z.TgZ(189,"h2",28),Z._uU(190,"Color:"),Z.qZA(),Z.TgZ(191,"div",6),Z._UZ(192,"div",29),Z.TgZ(193,"div",29),Z.TgZ(194,"div",30),Z.TgZ(195,"div",4),Z.TgZ(196,"p"),Z._uU(197,"Red\xa0\xa0"),Z._UZ(198,"i",31),Z.qZA(),Z.qZA(),Z.TgZ(199,"div",4),Z.TgZ(200,"p"),Z._uU(201,"Green\xa0\xa0"),Z._UZ(202,"i",32),Z.qZA(),Z._UZ(203,"span"),Z.qZA(),Z.TgZ(204,"div",4),Z.TgZ(205,"p"),Z._uU(206,"Blue\xa0\xa0"),Z._UZ(207,"i",33),Z.qZA(),Z._UZ(208,"span"),Z.qZA(),Z.TgZ(209,"div",4),Z.TgZ(210,"p"),Z._uU(211,"black\xa0\xa0"),Z._UZ(212,"i",34),Z.qZA(),Z._UZ(213,"span"),Z.qZA(),Z.qZA(),Z.qZA(),Z._UZ(214,"div",15),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z._UZ(215,"div",4),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(216,"div",35),Z.TgZ(217,"div",1),Z.TgZ(218,"div",2),Z.TgZ(219,"span"),Z._uU(220,"EMI Options"),Z.qZA(),Z.TgZ(221,"h2"),Z._uU(222,"We provide all possible EMI Options with all banks"),Z.qZA(),Z.qZA(),Z.TgZ(223,"div",3),Z.TgZ(224,"div",36),Z.TgZ(225,"div",10),Z.TgZ(226,"div",37),Z._UZ(227,"img",38),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(228,"div",36),Z.TgZ(229,"div",10),Z.TgZ(230,"div",37),Z._UZ(231,"img",39),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(232,"div",36),Z.TgZ(233,"div",10),Z.TgZ(234,"div",37),Z._UZ(235,"img",40),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(236,"div",36),Z.TgZ(237,"div",10),Z.TgZ(238,"div",37),Z._UZ(239,"img",41),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(240,"div",35),Z.TgZ(241,"div",1),Z.TgZ(242,"div",2),Z.TgZ(243,"span"),Z._uU(244,"Suggested Products"),Z.qZA(),Z.TgZ(245,"h2"),Z._uU(246,"Check out our other best deal products also"),Z.qZA(),Z.qZA(),Z.TgZ(247,"div",42),Z.TgZ(248,"div",15),Z.TgZ(249,"div",43),Z.TgZ(250,"div",37),Z._UZ(251,"img",44),Z.qZA(),Z.TgZ(252,"h2"),Z._uU(253,"Neo"),Z.qZA(),Z.TgZ(254,"div",45),Z.NdJ("click",function(){return e.sProduct("1","white")}),Z.TgZ(255,"a",46),Z._uU(256,"Book Now"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(257,"div",15),Z.TgZ(258,"div",43),Z.TgZ(259,"div",37),Z._UZ(260,"img",47),Z.qZA(),Z.TgZ(261,"h2"),Z._uU(262,"Neo"),Z.qZA(),Z.TgZ(263,"div",45),Z.NdJ("click",function(){return e.sProduct("2","red")}),Z.TgZ(264,"a",46),Z._uU(265,"Book Now"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(266,"div",15),Z.TgZ(267,"div",43),Z.TgZ(268,"div",37),Z._UZ(269,"img",48),Z.qZA(),Z.TgZ(270,"h2"),Z._uU(271,"Neo"),Z.qZA(),Z.TgZ(272,"div",45),Z.NdJ("click",function(){return e.sProduct("3","grey")}),Z.TgZ(273,"a",46),Z._uU(274,"Book Now"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()),2&o&&(Z.xp6(28),Z.s9C("id",e.colorid),Z.s9C("src",e.dataValue,Z.LSH))},encapsulation:2}),i})()}];let r=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=Z.oAB({type:i}),i.\u0275inj=Z.cJS({imports:[[u.Bz.forChild(n)],u.Bz]}),i})(),s=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=Z.oAB({type:i}),i.\u0275inj=Z.cJS({imports:[[d.ez,r]]}),i})()}}]);