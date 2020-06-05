//https://en.wikipedia.org/wiki/Beer_measurement
// 2 	Pale lager, Witbier, Pilsener, Berliner Weisse 		4
// 3 	Maibock, Blonde Ale 		                        6
// 4 	Weissbier 		                                    8
// 6 	American Pale Ale, India Pale Ale 		            12
// 8 	Weissbier, Saison 		                            16
// 10 	English Bitter, ESB 		                        20
// 13 	Biere de Garde, Double IPA 		                    26
// 17 	Dark lager, Vienna lager, Marzen, Amber Ale 		33
// 20 	Brown Ale, Bock, Dunkel, Dunkelweizen 		        39
// 24 	Irish Dry Stout, Doppelbock, Porter 		        47
// 29 	Stout 		                                        57
// 35 	Foreign Stout, Baltic Porter 		                69
// 40+ 	Imperial Stout 		                                79 

const canvas = document.querySelector("canvas");
canvas.width = 260;  //From CSS
canvas.height = 400;  //From CSS

//Setting width and height of bottle
bWidth = 350;
bHeight = 200;


let c = canvas.getContext("2d");

//Starting point
c.moveTo(100, 50);
c.lineTo(150,50);
c.lineTo(150, 130);
c.lineTo(180, 135);
c.lineTo(180, 320);
c.lineTo(70, 320);
c.lineTo(70, 135);
c.lineTo(100, 130);
//c.lineTo(100, 50);
c.closePath();
//'Start-aligned', 0, 50
c.textAlign= ('Start-aligned', 0, 50);
c.fillStyle = "red";
c.fill();

//c.arc(30, 30, 20, 0, Math.PI/3, false);
//c.arc()



c.stroke();