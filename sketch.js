let ball, floor;

function setup() {
	createCanvas(925, 925);
	
	world.gravity.y = 0;

	// c1_1.setAlpha(255);
	ball0 = new Sprite();
	ball0.x = 0;
	ball0.y = 0;
	ball0.diameter = 5;
	ball0.color = color(255);
	ball0.stroke = color(255);
	ball0.collider = "dynmaic";
	ball0.mass = 20;

	ball1 = new Sprite();
	ball1.x = 89;
	ball1.y = 93;
	ball1.diameter = 27;
	ball1.color = color(247, 231, 150);
	ball1.stroke = color(246, 222, 76);
	ball1.collider = "dynmaic";
	
	ball2 = new Sprite();
	ball2.x = 111;
	ball2.y = 192;
	ball2.diameter = 75;
	ball2.color = color(237, 155, 216);
	ball2.stroke = color(241, 139, 205);
	ball2.collider = "dynamic";

	ball3 = new Sprite();
	ball3.x = 121;
	ball3.y = 533;
	ball3.diameter = 115;
	ball3.color = color(0, 162, 232);
	ball3.stroke = color(0, 162, 232);
	ball3.collider = "dynamic";

	ball4 = new Sprite();
	ball4.x = 121;
	ball4.y = 533;
	ball4.diameter = 110;
	ball4.color = color(0);
	ball4.stroke = color(0);
	ball4.collider = "dynamic";
	ball4.overlaps(ball3);

	ball5 = new Sprite();
	ball5.x = 121;
	ball5.y = 533;
	ball5.diameter = 105;
	ball5.color = color(170, 189, 220);
	ball5.stroke = color(0);
	ball5.collider = "dynamic";
	ball5.overlaps(ball4);
	ball5.overlaps(ball3);

	ball6 = new Sprite();
	ball6.x = 137;
	ball6.y = 509;
	ball6.diameter = 31;
	ball6.color = color(0);
	ball6.stroke = color(0);
	ball6.collider = "dynamic";
	ball6.overlaps(ball5);
	ball6.overlaps(ball4);
	ball6.overlaps(ball3);

	ball7 = new Sprite();
	ball7.x = 129;
	ball7.y = 729;
	ball7.diameter = 20;
	ball7.color = color(237, 155, 216);
	ball7.stroke = color(241, 139, 205);
	ball7.collider = "dynamic";

	ball8 = new Sprite();
	ball8.x = 115;
	ball8.y = 800;
	ball8.diameter = 21;
	ball8.color = color(247, 231, 150);
	ball8.stroke = color(247, 231, 150);
	ball8.collider = "dynamic";

	ball9 = new Sprite();
	ball9.x = 115;
	ball9.y = 800;
	ball9.diameter = 17;
	ball9.color = color(0);
	ball9.stroke = color(0);
	ball9.collider = "dynamic";
	ball9.overlaps(ball8)

	ball10 = new Sprite();
	ball10.x = 176;
	ball10.y = 764;
	ball10.diameter = 44;
	ball10.color = color(59, 138, 181);
	ball10.stroke = color(59, 138, 181);
	ball10.collider = "dynamic";

	ball11 = new Sprite();
	ball11.x = 225;
	ball11.y = 630;
	ball11.diameter = 72;
	ball11.color = color(226, 58, 84);
	ball11.stroke = color(226, 58, 84);
	ball11.collider = "dynamic";

	let p12 = color(254, 235, 100);
	p12.setAlpha(200);
	ball12 = new Sprite();
	ball12.x = 195;
	ball12.y = 617;
	ball12.diameter = 72;
	ball12.color = p12;
	ball12.stroke = p12;
	ball12.collider = "dynamic";
	ball12.overlaps(ball11);

	let p13 = color(147, 84, 51);
	p13.setAlpha(200);
	ball13 = new Sprite();
	ball13.x = 267;
	ball13.y = 632;
	ball13.diameter = 72;
	ball13.color = p13;
	ball13.stroke = p13;
	ball13.collider = "dynamic";
	ball13.overlaps(ball11);

	ball14 = new Sprite();
	ball14.x = 272;
	ball14.y = 582;
	ball14.diameter = 72;
	ball14.color = color(226, 58, 84);
	ball14.stroke = color(226, 58, 84);
	ball14.collider = "dynamic";
	ball14.layer = 1
	ball13.overlaps(ball14);

	let p15 = color(223, 179, 55);
	p15.setAlpha(200);
	ball15 = new Sprite();
	ball15.x = 233;
	ball15.y = 537;
	ball15.diameter = 72;
	ball15.color = p15;
	ball15.stroke = p15;
	ball15.collider = "dynamic";
	ball15.overlaps(ball14);

	//big one
	ball16 = new Sprite();
	ball16.x = 402;
	ball16.y = 346;
	ball16.diameter = 415;
	ball16.color = color(26, 67, 191);
	ball16.stroke = color(26, 67, 191);
	ball16.collider = "dynamic";
	ball16.layer = 1;

	ball17 = new Sprite();
	ball17.x = 350;
	ball17.y = 300;
	ball17.diameter = 278;
	ball17.color = color(0);
	ball17.stroke = color(0);
	ball17.collider = "dynamic";
	ball17.overlaps(ball16);
	ball17.layer = 2;

	let p18 = color(205, 144, 225);
	p18.setAlpha(200);
	ball18 = new Sprite();
	ball18.x = 485;
	ball18.y = 190;
	ball18.diameter = 105;
	ball18.color = p18;
	ball18.stroke = p18;
	ball18.collider = "dynamic";
	ball18.overlaps(ball16);
	ball18.overlaps(ball17);
	ball18.layer = 2;

	let p19 = color(171, 181, 219);
	p19.setAlpha(200);
	ball19 = new Sprite();
	ball19.x = 391;
	ball19.y = 557;
	ball19.diameter = 84;
	ball19.color = p19;
	ball19.stroke = p19;
	ball19.collider = "dynamic";
	ball19.overlaps(ball16);
	ball19.overlaps(ball17);
	ball19.layer = 2;

	ball20 = new Sprite();
	ball20.x = 215;
	ball20.y = 442;
	ball20.diameter = 19;
	ball20.color = color(247, 231, 150);
	ball20.stroke = color(247, 231, 150);
	ball20.collider = "dynamic";
	ball20.overlaps(ball16)

	ball21 = new Sprite();
	ball21.x = 215;
	ball21.y = 442;
	ball21.diameter = 14;
	ball21.color = color(0);
	ball21.stroke = color(0);
	ball21.collider = "dynamic";
	ball21.overlaps(ball20)
	ball21.overlaps(ball16)

	ball22 = new Sprite();
	ball22.x = 281;
	ball22.y = 525;
	ball22.diameter = 15;
	ball22.color = color(0);
	ball22.stroke = color(0);
	ball22.collider = "dynamic";
	ball22.overlaps(ball16)

	ball23 = new Sprite();
	ball23.x = 281;
	ball23.y = 525;
	ball23.diameter = 12;
	ball23.color = color(209, 93, 124);
	ball23.stroke = color(0);
	ball23.collider = "dynamic";
	ball23.overlaps(ball22)
	ball23.overlaps(ball16)

	ball24 = new Sprite();
	ball24.x = 316;
	ball24.y = 525;
	ball24.diameter = 10;
	ball24.color = color(215, 163, 220);
	ball24.stroke = color(215, 163, 220);
	ball24.collider = "dynamic";
	ball24.overlaps(ball16)

	ball25 = new Sprite();
	ball25.x = 368;
	ball25.y = 600;
	ball25.diameter = 10;
	ball25.color = color(0);
	ball25.stroke = color(0);
	ball25.collider = "dynamic";
	
	let p26 = color(113, 207, 230);
	p26.setAlpha(200);
	ball26 = new Sprite();
	ball26.x = 428;
	ball26.y = 408;
	ball26.diameter = 30;
	ball26.color = p26;
	ball26.stroke = p26;
	ball26.collider = "dynamic";
	ball26.overlaps(ball16)
	ball26.overlaps(ball17)

	let p27 = color(216, 158, 34);
	p27.setAlpha(150);
	ball27 = new Sprite();
	ball27.x = 530;
	ball27.y = 475;
	ball27.diameter = 118;
	ball27.color = p27;
	ball27.stroke = p27;
	ball27.collider = "dynamic";
	ball27.overlaps(ball16)

	let p28 = color(179, 155, 68);
	p28.setAlpha(200);
	ball28 = new Sprite();
	ball28.x = 461;
	ball28.y = 470;
	ball28.diameter = 77;
	ball28.color = p28;
	ball28.stroke = p28;
	ball28.collider = "dynamic";
	ball28.overlaps(ball16)
	ball28.overlaps(ball27)

	let p29 = color(166, 225, 174);
	p29.setAlpha(200);
	ball29 = new Sprite();
	ball29.x = 490;
	ball29.y = 396;
	ball29.diameter = 77;
	ball29.color = p29;
	ball29.stroke = p29;
	ball29.collider = "dynamic";
	ball29.overlaps(ball16)
	ball29.overlaps(ball17)
	ball29.overlaps(ball27)
	
	ball29 = new Sprite();
	ball29.x = 461;
	ball29.y = 715;
	ball29.diameter = 32;
	ball29.color = color(244, 186, 46);
	ball29.stroke = color(244, 186, 46);
	ball29.collider = "dynamic";

	let p30 = color(85, 191, 223);
	p30.setAlpha(200);
	ball30 = new Sprite();
	ball30.x = 525;
	ball30.y = 565;
	ball30.diameter = 77;
	ball30.color = p30;
	ball30.stroke = p30;
	ball30.collider = "dynamic";
	ball30.overlaps(ball27)

	let p31 = color(254, 117, 181);
	p31.setAlpha(200);
	ball31 = new Sprite();
	ball31.x = 571;
	ball31.y = 508;
	ball31.diameter = 39;
	ball31.color = p31;
	ball31.stroke = p31;
	ball31.collider = "dynamic";
	ball31.overlaps(ball27)

	ball32 = new Sprite();
	ball32.x = 555;
	ball32.y = 520;
	ball32.diameter = 10;
	ball32.color = color(0);
	ball32.stroke = color(0);
	ball32.collider = "dynamic";
	ball32.overlaps(ball27)
	ball32.overlaps(ball31)

	let p33 = color(48, 106, 96);
	p33.setAlpha(200);
	ball33 = new Sprite();
	ball33.x = 656;
	ball33.y = 293;
	ball33.diameter = 130;
	ball33.color = p33;
	ball33.stroke = p33;
	ball33.collider = "dynamic";
	ball33.overlaps(ball16)

	ball34 = new Sprite();
	ball34.x = 656;
	ball34.y = 293;
	ball34.diameter = 27;
	ball34.color = color(0);
	ball34.stroke = color(0);
	ball34.collider = "dynamic";
	ball34.overlaps(ball33)

	ball35 = new Sprite();
	ball35.x = 668;
	ball35.y = 175;
	ball35.diameter = 61;
	ball35.color = color(252, 223, 115);
	ball35.stroke = color(252, 223, 115);
	ball35.collider = "dynamic";

	ball36 = new Sprite();
	ball36.x = 750;
	ball36.y = 220;
	ball36.diameter = 30;
	ball36.color = color(251, 168, 20);
	ball36.stroke = color(251, 168, 20);
	ball36.collider = "dynamic";

	ball37 = new Sprite();
	ball37.x = 813;
	ball37.y = 155;
	ball37.diameter = 21;
	ball37.color = color(239, 65, 90);
	ball37.stroke = color(239, 65, 90);
	ball37.collider = "dynamic";

	ball38 = new Sprite();
	ball38.x = 826;
	ball38.y = 481;
	ball38.diameter = 21;
	ball38.color = color(28, 82, 226);
	ball38.stroke = color(206, 245, 220);
	ball38.collider = "dynamic";

	ball39 = new Sprite();
	ball39.x = 769;
	ball39.y = 669;
	ball39.diameter = 165;
	ball39.color = color(202, 211, 228);
	ball39.stroke = color(202, 211, 228);
	ball39.collider = "dynamic";

	ball40 = new Sprite();
	ball40.x = 772;
	ball40.y = 602;
	ball40.diameter = 18;
	ball40.color = color(210, 25, 50);
	ball40.stroke = color(210, 25, 50);
	ball40.collider = "dynamic";
	ball40.overlaps(ball39)

	ball41 = new Sprite();
	ball41.x = 793;
	ball41.y = 605;
	ball41.diameter = 12;
	ball41.color = color(0);
	ball41.stroke = color(0);
	ball41.collider = "dynamic";
	ball41.overlaps(ball39)
	
	let p42 = color(198, 175, 133);
	p42.setAlpha(200);
	ball42 = new Sprite();
	ball42.x = 682;
	ball42.y = 619;
	ball42.diameter = 51;
	ball42.color = p42;
	ball42.stroke = p42;
	ball42.collider = "dynamic";
	ball42.overlaps(ball39);

	ball43 = new Sprite();
	ball43.x = 730;
	ball43.y = 645;
	ball43.diameter = 62;
	ball43.color = color(223, 210, 174);
	ball43.stroke = color(223, 210, 174);
	ball43.collider = "dynamic";
	ball43.overlaps(ball39)
	ball43.overlaps(ball42)

	ball44 = new Sprite();
	ball44.x = 730;
	ball44.y = 645;
	ball44.diameter = 45;
	ball44.color = color(128, 216, 224);
	ball44.stroke = color(128, 216, 224);
	ball44.collider = "dynamic";
	ball44.overlaps(ball39)

	let p45 = color(215, 182, 70);
	p45.setAlpha(230);
	ball45 = new Sprite();
	ball45.x = 857;
	ball45.y = 667;
	ball45.diameter = 24;
	ball45.color = p45;
	ball45.stroke = p45;
	ball45.collider = "dynamic";
	ball45.overlaps(ball39);

	ball46 = new Sprite();
	ball46.x = 735;
	ball46.y = 772;
	ball46.diameter = 24;
	ball46.color = color(237, 215, 33);
	ball46.stroke = color(237, 215, 33);
	ball46.collider = "dynamic";
	
	ball47 = new Sprite();
	ball47.x = 712;
	ball47.y = 825;
	ball47.diameter = 38;
	ball47.color = color(208, 48, 72);
	ball47.stroke = color(237, 48, 72);
	ball47.collider = "dynamic";

	ball48 = new Sprite();
	ball48.x = 814;
	ball48.y = 859;
	ball48.diameter = 26;
	ball48.color = color(59, 142, 189);
	ball48.stroke = color(59, 142, 189);
	ball48.collider = "dynamic";
}

function draw() {
	background(34, 37, 46);
	ball0.moveTowards(mouse);
	clear;
}
