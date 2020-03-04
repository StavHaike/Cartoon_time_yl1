spongebob=0;
Patrick=0;
Phineas=0;
Perry=0;
Bubbles=0;
Mort=0;
Poof=0;
MojoJojo=0;
IceKing=0;
Skipper=0;
Zuko=0;
Appa=0;

function startOver(){
	window.location.assign("WCRU.html");

}

function get(id){
	x=document.getElementById(id);
	x.style.backgroundColor="#a3c2c2";
	x.style.color="black";
}

function one1(){
	spongebob++;
	Mort++;
	Phineas++;
	Patrick++;
	Bubbles++;
	Poof++;	
	get("one2");
	get("one3");
	get("one4");
	get("one5");
	console.log(spongebob);
}function one2(){
	Appa++;
	get("one1");
	get("one3");
	get("one4");
	get("one5");
}function one3(){
	MojoJojo++;
	IceKing++;
	Skipper++;
	Zuko++;
	get("one1");
	get("one2");
	get("one4");
	get("one5");
}function one4(){
	get("one1");
	get("one2");
	get("one3");
	get("one5");
}function one5(){
	Perry++;
	get("one1");
	get("one2");
	get("one3");
	get("one4");
}

function two1(){
	Skipper++;
	Appa++;
	IceKing++;
	get("two2");
	get("two3");
	get("two4");
	get("two5");
	get("two6");
	get("two7");
	get("two8");
}function two2() {
	Skipper++;
	Mort++;	
	get("two1");
	get("two3");
	get("two4");
	get("two5");
	get("two6");
	get("two7");
	get("two8");
}function two3(){
	spongebob++;
	get("two1");
	get("two2");
	get("two4");
	get("two5");
	get("two6");
	get("two7");
	get("two8");
}function two4() {
	Poof++;
	Perry++;
	Phineas++;
	MojoJojo++;
	get("two1");
	get("two2");
	get("two3");
	get("two5");
	get("two6");
	get("two7");
	get("two8");
}function two5(){
	Poof++;
	Patrick++;
	Bubbles++;
	get("two1");
	get("two2");
	get("two3");
	get("two4");
	get("two6");
	get("two7");
	get("two8");
}function two6() {
	Bubbles++;
	Patrick++;
	spongebob++;
	get("two1");
	get("two2");
	get("two3");
	get("two4");
	get("two5");
	get("two7");
	get("two8");
}function two7() {
	Zuko++;
	get("two1");
	get("two2");
	get("two4");
	get("two5");
	get("two6");
	get("two3");
	get("two8");
}function two8() {
	Poof++;
	get("two1");
	get("two2");
	get("two4");
	get("two5");
	get("two6");
	get("two7");
	get("two3");
}

function three1() {
	Bubbles++;
	Poof++;
	Phineas++;
	get("three2");
	get("three3");
	get("three4");
	get("three5");
	get("three6");
	get("three7");
	get("three8");
}function three2() {
	Skipper++;
	Bubbles++;
	get("three1");
	get("three3");
	get("three4");
	get("three5");
	get("three6");
	get("three7");
	get("three8");
}function three3() {
	Appa++;
	Poof++;
	MojoJojo++;
	get("three2");
	get("three1");
	get("three4");
	get("three5");
	get("three6");
	get("three7");
	get("three8");
}function three4() {
	Zuko++;
	get("three2");
	get("three3");
	get("three3");
	get("three5");
	get("three6");
	get("three7");
	get("three8");
}function three5() {
	Perry++;
	Mort++;
	Appa++;	
	get("three2");
	get("three3");
	get("three4");
	get("three1");
	get("three6");
	get("three7");
	get("three8");
}function three6() {
	spongebob++;
	Patrick++;	
	get("three2");
	get("three3");
	get("three4");
	get("three5");
	get("three1");
	get("three7");
	get("three8");
}function three7() {
	IceKing++;
	get("three2");
	get("three3");
	get("three4");
	get("three5");
	get("three6");
	get("three1");
	get("three8");
}function three8() {
	Perry++;
	Appa++;
	get("three2");
	get("three3");
	get("three4");
	get("three5");
	get("three6");
	get("three7");
	get("three1");
}

function four1() {
	Poof++;
	IceKing++;	
	get("four2");
	get("four3");
	get("four4");
	get("four5");
	get("four6");
	get("four7");
	get("four8");
	get("four9");
	get("four10");
}function four2() {
	spongebob++;
	get("four1");
	get("four3");
	get("four4");
	get("four5");
	get("four6");
	get("four7");
	get("four8");
	get("four9");
	get("four10");
}function four3() {
	Zuko++;
	get("four2");
	get("four1");
	get("four4");
	get("four5");
	get("four6");
	get("four7");
	get("four8");
	get("four9");
	get("four10");
}function four4() {
	Appa++;
	get("four2");
	get("four3");
	get("four1");
	get("four5");
	get("four6");
	get("four7");
	get("four8");
	get("four9");
	get("four10");
}function four5() {
	Mort++;
	get("four2");
	get("four3");
	get("four4");
	get("four1");
	get("four6");
	get("four7");
	get("four8");
	get("four9");
	get("four10");
}function four6() {
	Bubbles++;
	get("four2");
	get("four3");
	get("four4");
	get("four5");
	get("four1");
	get("four7");
	get("four8");
	get("four9");
	get("four10");
}function four7() {
	Perry++;
	Phineas++;
	get("four2");
	get("four3");
	get("four4");
	get("four5");
	get("four6");
	get("four1");
	get("four8");
	get("four9");
	get("four10");
}function four8() {
	Skipper++;
	get("four2");
	get("four3");
	get("four4");
	get("four5");
	get("four6");
	get("four7");
	get("four1");
	get("four9");
	get("four10");
}function four9() {
	spongebob++;
	Patrick++;
	get("four2");
	get("four3");
	get("four4");
	get("four5");
	get("four6");
	get("four7");
	get("four8");
	get("four1");
	get("four10");
}function four10() {
	MojoJojo++;
	IceKing++;
	get("four2");
	get("four3");
	get("four4");
	get("four5");
	get("four6");
	get("four7");
	get("four8");
	get("four9");
	get("four1");
}

function five1() {
	spongebob++;
	Patrick++;
	get("five2");
	get("five3");
	get("five4");
	get("five5");
	get("five6");
	get("five7");
}function five2() {
	Phineas++;
	Perry++;
	get("five1");
	get("five3");
	get("five4");
	get("five5");
	get("five6");
	get("five7");
}function five3() {
	Skipper++;
	Mort++;
	get("five2");
	get("five1");
	get("five4");
	get("five5");
	get("five6");
	get("five7");
}function five4() {
	IceKing++;
	get("five2");
	get("five3");
	get("five1");
	get("five5");
	get("five6");
	get("five7");
}function five5() {
	Appa++;
	Zuko++;
	get("five2");
	get("five3");
	get("five4");
	get("five1");
	get("five6");
	get("five7");
}function five6() {
	Bubbles++;
	MojoJojo++;
	get("five2");
	get("five3");
	get("five4");
	get("five5");
	get("five1");
	get("five7");
}function five7() {
	Poof++;
	get("five2");
	get("five3");
	get("five4");
	get("five5");
	get("five6");
	get("five1");
}

function six1() {
	Bubbles++;
	get("six2");
	get("six3");
	get("six4");
	get("six5");
	get("six6");
	get("six7");
	get("six8");
	get("six9");
	get("six10");
}function six2() {
	Appa++;
	get("six1");
	get("six3");
	get("six4");
	get("six5");
	get("six6");
	get("six7");
	get("six8");
	get("six9");
	get("six10");
}function six3() {
	Skipper++;
	Mort++;
	get("six2");
	get("six1");
	get("six4");
	get("six5");
	get("six6");
	get("six7");
	get("six8");
	get("six9");
	get("six10");
}function six4() {
	IceKing++;
	MojoJojo++;
	get("six2");
	get("six3");
	get("six1");
	get("six5");
	get("six6");
	get("six7");
	get("six8");
	get("six9");
	get("six10");
}function six5() {
	spongebob++;
	get("six2");
	get("six3");
	get("six4");
	get("six1");
	get("six6");
	get("six7");
	get("six8");
	get("six9");
	get("six10");
}function six6() {
	Mort++;
	get("six2");
	get("six3");
	get("six4");
	get("six5");
	get("six1");
	get("six7");
	get("six8");
	get("six9");
	get("six10");
}function six7() {
	Patrick++;
	spongebob++;
	get("six2");
	get("six3");
	get("six4");
	get("six5");
	get("six6");
	get("six1");
	get("six8");
	get("six9");
	get("six10");
}function six8() {
	Perry++;
	Skipper++;
	get("six2");
	get("six3");
	get("six4");
	get("six5");
	get("six6");
	get("six7");
	get("six1");
	get("six9");
	get("six10");
}function six9() {
	Poof++;
	Phineas++;
	get("six2");
	get("six3");
	get("six4");
	get("six5");
	get("six6");
	get("six7");
	get("six8");
	get("six1");
	get("six10");
}function six10() {
	Poof++;
	Zuko++;
	get("six2");
	get("six3");
	get("six4");
	get("six5");
	get("six6");
	get("six7");
	get("six8");
	get("six9");
	get("six1");
}

function seven1() {
	spongebob++;
	get("seven2");
	get("seven3");
	get("seven4");
	get("seven5");
	get("seven6");
	get("seven7");
	get("seven8");
	get("seven9");
	get("seven10");
}function seven2() {
	Phineas++;
	Perry++;
	get("seven1");
	get("seven3");
	get("seven4");
	get("seven5");
	get("seven6");
	get("seven7");
	get("seven8");
	get("seven9");
	get("seven10");
}function seven3() {
	Poof++;	
	get("seven2");
	get("seven1");
	get("seven4");
	get("seven5");
	get("seven6");
	get("seven7");
	get("seven8");
	get("seven9");
	get("seven10");
}function seven4() {
	Skipper++;
	Mort++;
	get("seven2");
	get("seven3");
	get("seven1");
	get("seven5");
	get("seven6");
	get("seven7");
	get("seven8");
	get("seven9");
	get("seven10");
}function seven5() {
	Appa++;
	MojoJojo++;
	get("seven2");
	get("seven3");
	get("seven4");
	get("seven1");
	get("seven6");
	get("seven7");
	get("seven8");
	get("seven9");
	get("seven10");
}function seven6() {
	Patrick++;
	get("seven2");
	get("seven3");
	get("seven4");
	get("seven5");
	get("seven1");
	get("seven7");
	get("seven8");
	get("seven9");
	get("seven10");
}function seven7() {
	Skipper++;
	Bubbles++;
	get("seven2");
	get("seven3");
	get("seven4");
	get("seven5");
	get("seven6");
	get("seven1");
	get("seven8");
	get("seven9");
	get("seven10");
}function seven8() {
	IceKing++;
	get("seven2");
	get("seven3");
	get("seven4");
	get("seven5");
	get("seven6");
	get("seven7");
	get("seven1");
	get("seven9");
	get("seven10");
}function seven9() {
	Appa++;
	get("seven2");
	get("seven3");
	get("seven4");
	get("seven5");
	get("seven6");
	get("seven7");
	get("seven8");
	get("seven1");
	get("seven10");
}function seven10() {
	Zuko++;
	get("seven2");
	get("seven3");
	get("seven4");
	get("seven5");
	get("seven6");
	get("seven7");
	get("seven8");
	get("seven9");
	get("seven1");
}

function eight1() {
	Appa++;
	Zuko++;
	get("eight2");
	get("eight3");
	get("eight4");
	get("eight5");
	get("eight6");
	get("eight7");
}function eight2() {
	Phineas++;
	Mort++;
	Skipper++;
	get("eight1");
	get("eight3");
	get("eight4");
	get("eight5");
	get("eight6");
	get("eight7");
}function eight3() {
	Phineas++;
	Patrick++;
	Poof++;
	Mort++;
	spongebob++;
	get("eight2");
	get("eight1");
	get("eight4");
	get("eight5");
	get("eight6");
	get("eight7");
}function eight4() {
	Bubbles++;
	Patrick++;
	spongebob++;
	get("eight2");
	get("eight3");
	get("eight1");
	get("eight5");
	get("eight6");
	get("eight7");
}function eight5() {
	IceKing++;
	Perry++;
	Bubbles++;
	MojoJojo++;
	Skipper++;
	get("eight2");
	get("eight3");
	get("eight4");
	get("eight1");
	get("eight6");
	get("eight7");
}function eight6() {
	IceKing++;
	MojoJojo++;
	get("eight2");
	get("eight3");
	get("eight4");
	get("eight5");
	get("eight1");
	get("eight7");
}function eight7() {
	Appa++;
	Zuko++;
	Poof++;
	get("eight2");
	get("eight3");
	get("eight4");
	get("eight5");
	get("eight6");
	get("eight1");
}

function nine1() {
	Poof++;
	spongebob++;
	Bubbles++;
	Skipper++;
	Phineas++;
	Patrick++;
	Appa++;
	get("nine2");
	get("nine3");
	get("nine4");
	get("nine5");
}function nine2() {
	MojoJojo++;
	Bubbles++;
	IceKing++;
	Phineas++;
	Appa++;
	get("nine1");
	get("nine3");
	get("nine4");
	get("nine5");
}function nine3() {
	Mort++;
	Skipper++;
	Patrick++;
	spongebob++;
	get("nine2");
	get("nine1");
	get("nine4");
	get("nine5");
}function nine4() {
	Poof++;
	Bubbles++;
	Zuko++;
	Patrick++;
	get("nine2");
	get("nine3");
	get("nine1");
	get("nine5");
}function nine5() {
	Mort++;
	MojoJojo++;
	Bubbles++;
	IceKing++;
	Phineas++;
	Zuko++;
	get("nine2");
	get("nine3");
	get("nine4");
	get("nine1");
}

function ten1() {
	spongebob++;
	Patrick++;
	get("ten2");
	get("ten3");
	get("ten4");
	get("ten5");
	get("ten6");
	get("ten7");
}function ten2() {
	IceKing++;
	MojoJojo++;
	Skipper++;
	Zuko++;
	Appa++;
	Phineas++;
	get("ten1");
	get("ten3");
	get("ten4");
	get("ten5");
	get("ten6");
	get("ten7");
}function ten3() {
	Phineas++;
	spongebob++;
	Poof++;
	Mort++;
	Patrick++;
	get("ten2");
	get("ten1");
	get("ten4");
	get("ten5");
	get("ten6");
	get("ten7");
}function ten4() {
	MojoJojo++;
	IceKing++;
	Skipper++;
	Zuko++;
	get("ten2");
	get("ten3");
	get("ten1");
	get("ten5");
	get("ten6");
	get("ten7");
}function ten5() {
	Zuko++;
	Bubbles++;
	Patrick++;
	Perry++;
	get("ten2");
	get("ten3");
	get("ten4");
	get("ten1");
	get("ten6");
	get("ten7");
}function ten6() {
	Bubbles++;
	Zuko++;
	IceKing++;
	Mort++;
	get("ten2");
	get("ten3");
	get("ten4");
	get("ten5");
	get("ten1");
	get("ten7");
}function ten7() {
	Mort++;
	Bubbles++;
	Zuko++;
	Patrick++;
	spongebob++;
	get("ten2");
	get("ten3");
	get("ten4");
	get("ten5");
	get("ten6");
	get("ten1");
}

function eleven1() {
	Skipper++;
	Phineas++;
	Poof++;
	Perry++;
	spongebob++;
	get("eleven2");
	get("eleven3");
	get("eleven4");
	get("eleven5");
	get("eleven6");
	get("eleven7");
	get("eleven8");
}function eleven2() {
	Bubbles++;
	Perry++;
	Phineas++;
	Skipper++;
	Zuko++;
	Appa++;
	spongebob++;
	Patrick++;	
	get("eleven1");
	get("eleven3");
	get("eleven4");
	get("eleven5");
	get("eleven6");
	get("eleven7");
	get("eleven8");
}function eleven3() {
	IceKing++;
	Mort++;
	get("eleven2");
	get("eleven1");
	get("eleven4");
	get("eleven5");
	get("eleven6");
	get("eleven7");
	get("eleven8");
}function eleven4() {
	spongebob++;
	Patrick++;
	Phineas++;
	Mort++;
	Bubbles++;
	Poof++;
	get("eleven2");
	get("eleven3");
	get("eleven1");
	get("eleven5");
	get("eleven6");
	get("eleven7");
	get("eleven8");
}function eleven5() {
	spongebob++;
	Phineas++;
	Bubbles++;
	MojoJojo++;
	Zuko++;
	get("eleven2");
	get("eleven3");
	get("eleven4");
	get("eleven1");
	get("eleven6");
	get("eleven7");
	get("eleven8");
}function eleven6() {
	Patrick++;
	Appa++;
	get("eleven2");
	get("eleven3");
	get("eleven4");
	get("eleven5");
	get("eleven1");
	get("eleven7");
	get("eleven8");
}function eleven7() {
	spongebob++;
	Skipper++;
	Poof++;
	Mort++;
	get("eleven2");
	get("eleven3");
	get("eleven4");
	get("eleven5");
	get("eleven6");
	get("eleven1");
	get("eleven8");
}function eleven8() {
	Patrick++;
	IceKing++;
	MojoJojo++;
	get("eleven2");
	get("eleven3");
	get("eleven4");
	get("eleven5");
	get("eleven6");
	get("eleven7");
	get("eleven1");
}

function twelve1() {
	Mort++;
	get("twelve2");
	get("twelve3");
	get("twelve4");
	get("twelve5");
	get("twelve6");
	get("twelve7");
	
}function twelve2() {
	Skipper++;
	Appa++;
	get("twelve1");
	get("twelve3");
	get("twelve4");
	get("twelve5");
	get("twelve7");
	get("twelve6");
}function twelve3() {
	Skipper++;
	IceKing++;
	get("twelve2");
	get("twelve1");
	get("twelve4");
	get("twelve5");
	get("twelve7");
	get("twelve6");
}function twelve4() {
	Bubbles++;
	MojoJojo++;
	get("twelve2");
	get("twelve3");
	get("twelve1");
	get("twelve5");
	get("twelve7");
	get("twelve6");
}function twelve5() {
	Phineas++;
	Perry++;
	spongebob++;
	Patrick++;
	Poof++;
	Skipper++;
	get("twelve2");
	get("twelve3");
	get("twelve4");
	get("twelve1");
	get("twelve6");
	get("twelve7");

}function twelve6() {
	Appa++;
	Zuko++;
	get("twelve2");
	get("twelve3");
	get("twelve4");
	get("twelve5");
	get("twelve1");
	get("twelve7");

}function twelve7(){
	get("twelve2");
	get("twelve3");
	get("twelve4");
	get("twelve5");
	get("twelve1");
	get("twelve6");

}

function thirteen1(){
	Skipper++;
	Zuko++;
	MojoJojo++;
	IceKing++;
	Perry++;
	Phineas++;
	get("thirteen2");
	get("thirteen3");
	get("thirteen4");
	get("thirteen5");
	get("thirteen6");
	get("thirteen7");
	get("thirteen8");
}function thirteen2(){
	spongebob++;
	get("thirteen1");
	get("thirteen3");
	get("thirteen4");
	get("thirteen5");
	get("thirteen6");
	get("thirteen7");
	get("thirteen8");
}function thirteen3(){
	MojoJojo++;
	Patrick++;
	get("thirteen2");
	get("thirteen1");
	get("thirteen4");
	get("thirteen5");
	get("thirteen6");
	get("thirteen7");
	get("thirteen8");
}function thirteen4(){
	Skipper++;
	Perry++;
	get("thirteen2");
	get("thirteen3");
	get("thirteen1");
	get("thirteen5");
	get("thirteen6");
	get("thirteen7");
	get("thirteen8");
}function thirteen5(){
	Skipper++;
	Zuko++;
	get("thirteen2");
	get("thirteen3");
	get("thirteen4");
	get("thirteen1");
	get("thirteen6");
	get("thirteen7");
	get("thirteen8");
}function thirteen6(){
	Bubbles++;
	Appa++;
	Zuko++;
	get("thirteen2");
	get("thirteen3");
	get("thirteen4");
	get("thirteen5");
	get("thirteen1");
	get("thirteen7");
	get("thirteen8");
}function thirteen7(){
	IceKing++;
	MojoJojo++;
	get("thirteen2");
	get("thirteen3");
	get("thirteen4");
	get("thirteen5");
	get("thirteen6");
	get("thirteen1");
	get("thirteen8");
}function thirteen8(){
	Mort++;
	Poof++;
	get("thirteen2");
	get("thirteen3");
	get("thirteen4");
	get("thirteen5");
	get("thirteen6");
	get("thirteen7");
	get("thirteen1");
}

function fourteen1() {
	Bubbles++;
	spongebob++;
	Patrick++;
	Phineas++;
	Mort++;
	Appa++;
	get("fourteen2");
	get("fourteen3");
	get("fourteen4");
	get("fourteen5");
	get("fourteen6");
}function fourteen2() {
	IceKing++;
	MojoJojo++;
	get("fourteen1");
	get("fourteen3");
	get("fourteen4");
	get("fourteen5");
	get("fourteen6");
}function fourteen3() {
	IceKing++;
	MojoJojo++;
	get("fourteen2");
	get("fourteen1");
	get("fourteen4");
	get("fourteen5");
	get("fourteen6");
}function fourteen4() {
	Poof++;
	Mort++;
	get("fourteen2");
	get("fourteen3");
	get("fourteen1");
	get("fourteen5");
	get("fourteen6");
}function fourteen5() {
	Zuko++;
	Perry++;
	Bubbles++;
	Skipper++;
	get("fourteen2");
	get("fourteen3");
	get("fourteen4");
	get("fourteen1");
	get("fourteen6");
}function fourteen6() {
	Perry++;
	get("fourteen2");
	get("fourteen3");
	get("fourteen4");
	get("fourteen5");
	get("fourteen1");
}

function fifteen1() {
	spongebob++;
	Patrick++;
	Phineas++;
	get("fifteen2");
	get("fifteen3");
	get("fifteen4");
	get("fifteen5");
}function fifteen2() {
	Perry++;
	Skipper++;
	Zuko++;
	get("fifteen1");
	get("fifteen3");
	get("fifteen4");
	get("fifteen5");
}function fifteen3() {
	IceKing++;
	MojoJojo++;
	Bubbles++;
	get("fifteen2");
	get("fifteen1");
	get("fifteen4");
	get("fifteen5");
}function fifteen4() {
	Appa++;
	get("fifteen2");
	get("fifteen3");
	get("fifteen1");
	get("fifteen5");
}function fifteen5() {
	Mort++;
	get("fifteen2");
	get("fifteen3");
	get("fifteen4");
	get("fifteen1");
}

function submit(){
	if(spongebob>=Patrick&&spongebob>=Phineas&&spongebob>=Perry&&spongebob>=Bubbles&&spongebob>=Mort&&spongebob>=Poof&&spongebob>=MojoJojo&&spongebob>=IceKing&&spongebob>=Skipper&&spongebob>=Zuko&&spongebob>=Appa){
		window.location.assign("SpongeBob.html");
	}else if(Patrick>=Phineas&&Patrick>=Perry&&Patrick>=Bubbles&&Patrick>=Mort&&Patrick>=Poof&&Patrick>=MojoJojo&&Patrick>=IceKing&&Patrick>=Skipper&&Patrick>=Zuko&&Patrick>=Appa){
		window.location.assign("Patrick.html");		
	}else if(Phineas>=Perry&&Phineas>=Bubbles&&Phineas>=Mort&&Phineas>=Poof&&Phineas>=MojoJojo&&Phineas>=IceKing&&Phineas>=Skipper&&Phineas>=Zuko&&Phineas>=Appa){
		window.location.assign("Phineas.html");
	}else if(Perry>=Bubbles&&Perry>=Mort&&Perry>=Poof&&Perry>=MojoJojo&&Perry>=IceKing&&Perry>=Skipper&&Perry>=Zuko&&Perry>=Appa){
		window.location.assign("Perry.html");
	}else if(Bubbles>=Mort&&Bubbles>=Poof&&Bubbles>=MojoJojo&&Bubbles>=IceKing&&Bubbles>=Skipper&&Bubbles>=Zuko&&Bubbles>=Appa){
		window.location.assign("Bubbles.html");
	}else if(Mort>=Poof&&Mort>=MojoJojo&&Mort>=IceKing&&Mort>=Skipper&&Mort>=Zuko&&Mort>=Appa){
		window.location.assign("mort.html");
	}else if(Poof>=MojoJojo&&Poof>=IceKing&&Poof>=Skipper&&Poof>=Zuko&&Poof>=Appa){
		window.location.assign("poof.html");
	}else if(MojoJojo>=IceKing&&MojoJojo>=Skipper&&MojoJojo>=Zuko&&MojoJojo>=Appa){
		window.location.assign("mojo.html");
	}else if(IceKing>=Skipper&&IceKing>=Zuko&&IceKing>=Appa){
		window.location.assign("iceking.html");
	}else if(Skipper>=Zuko&&Skipper>=Appa){
		window.location.assign("skipper.html");
	}else if(Zuko>=Appa){
		window.location.assign("zuko.html");
	}else{
		window.location.assign("appa.html");
	}

}