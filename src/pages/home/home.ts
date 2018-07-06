import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //For question 1
  mexico : boolean;

russia: boolean;
france: boolean;

//for question 2
manunited: boolean;
arsenal: boolean;
barcelona: boolean;
//for question 3
steve: boolean;
wenger: boolean;
tinkler: boolean;
//for question 4
fourteen: boolean;
eleven: boolean;
eight: boolean;

//for question 5
egypt: boolean;
senegal: boolean;
tunisia: boolean;

//for question 5
flower: string;
coldest: string;
island: string;
ocean: string;
tree: string;
tarzan: string;
micky: string;
dory: string;
jungle: string;
valentine: string;

//display string on football 
mex: string;
ars: string;
stev: string;
elev: string;
sene: string;
//display string on Nature
//// count score and show results
results: number;
count: number;
Football: boolean;
Natures: boolean;
Movie: boolean;
front: number;
  constructor(public navCtrl: NavController) {
    this.front = 1;
      this.results= 0;
      this.count = 0;
  }

onFootball(){
  this.front = 0;
  this.Football = true;
}

onNatures(){
  this.Football =  false;
  this.Natures = true;
}
onMovie(){
  this.Natures =false;
  this.Movie = true;

}

onBackFT(){
  this.Natures = false;
  this.Football = true;
}
onBackNT(){
  this.Movie = false;
  this.Natures = true;
 
}
onOK(){
  this.front = 1;
  this.results = 0;
}

onSubmit(){
  //display ngIf 
  this.results = 1;
  this.Movie = false;
  this.results = 1;
  //question 1 on Football
  if(this.mexico == true){
    this.mex = "Wrong answer, Correct answer is Russia";
  }else if(this.russia == true){
    this.count = this.count + 1;
    this.mex = "You got it right the answer is Russia";
    
  }else if(this.france == true){
    this.mex = "Wrong answer, Correct answer is Russia";
  }else  if(this.mexico == null || this.russia == null || this.france == null ){
    alert("Question 1 Answer is required");
   
  }
//question 2 on football
if(this.manunited == true){
  this.ars = "Wrong answer, Correct answer is barcelona";
}else if(this.arsenal == true){
  
  this.ars = "Wrong answer, Correct answer is barcelona";
}else if(this.barcelona == true){
  this.count = this.count + 1;
  this.ars = "You got it right, the answer is barcelona";
}

//question 3 on football
if(this.steve == true){
  this.count = this.count + 1;
  this.stev = "You got it right, the answer is Steve Kompela";
}else if(this.wenger == true){
  this.stev = "Wrong answer, Correct answer is Steve Kompela";
}else if(this.tinkler == true){
  this.stev = "Wrong answer, Correct answer is Steve Kompela";
}

//question 4 on football
if(this.fourteen == true){
  
  this.elev = "Wrong answer, Correct answer is 11";
}else if(this.eleven == true){
  this.elev = "You got it right, the answer is 11";
  this.count = this.count + 1;
}else if(this.eight == true){
  this.elev = "Wrong answer, Correct answer is 11";
}

//question 5 on football
if(this.egypt == true){
  this.count = this.count + 1;
  this.sene = "You got it right, the answer is egypt";
}else if(this.senegal == true){
  this.sene = "Wrong answer, Correct answer is egypt";
}else if(this.tunisia == true){
  this.sene = "Wrong answer, Correct answer is egypt";
}

//question 1 on Nature
if(this.flower == "Lily"){
  this.count = this.count + 1;
  this.flower = "Correct answer, it is Lily";
}else if(this.flower == "Narciccus"){
  this.flower = "Incorrect, answer is Lily";
}else if(this.flower == "Pertunia"){
  this.flower = "Incorrect, answer is Lily";
}
//question 2 on Nature
if(this.coldest == "Verkoyansk in Siberia"){
  this.count = this.count + 1;
  this.coldest = "Correct answer, it is Verkoyansk in Siberia";
}else if(this.coldest == "Atlantic"){
  this.coldest = "Incorrect, answer is Verkoyansk in Siberia";
}else if(this.coldest == "England"){
  this.coldest = "Incorrect, answer is Verkoyansk in Siberia";
}

//question 3 on Nature
if(this.island == "GreenLand"){
  this.count = this.count + 1;
  this.island = "Correct answer, it is GreenLand";
}else if(this.island == "Irland"){
  this.island = "Incorrect, answer is GreenLand";
}else if(this.island == "Hawaii"){
  this.island = "Incorrect, answer is GreenLand";
}

//question 4 on Nature
if(this.ocean == "Pacific ocean"){
  this.count = this.count + 1;
  this.ocean = "Correct answer, it is Pacific ocean";
}else if(this.ocean == "Indian ocean"){
  this.ocean = "Incorrect, answer is Pacific ocean";
}else if(this.ocean == "Arctic ocean"){
  this.ocean = "Incorrect, answer is Pacific ocean";
}

//question 5 on Nature
if(this.tree == "Sequoia"){
  this.count = this.count + 1;
  this.tree = "Correct answer, it is Sequoia";
}else if(this.tree == "Baobab"){
  this.tree = "Incorrect, answer is Sequoia";
}else if(this.tree == "Hyperion tree"){
  this.tree = "Incorrect, answer is Sequoia";
}

//question 1 on movies
if(this.tarzan == "Peter Pan"){
  this.count = this.count + 1;
  this.tarzan = "Correct answer, it is Peter Pan";
}else if(this.tarzan == "Gomez"){
  this.tarzan = "Incorrect, answer is Peter Pan";
}else if(this.tarzan == "John"){
  this.tarzan = "Incorrect, answer is Peter Pan";
}
//question 2 on movies
if(this.micky == "Yellow"){
  this.count = this.count + 1;
  this.micky = "Correct answer, it is Yellow";
}else if(this.micky == "Black"){
  this.micky = "Incorrect, answer is Yellow";
}else if(this.micky == "Red"){
  this.micky = "Incorrect, answer is Yellow";
}
//question 3 on movies
if(this.dory == "Blue tang Fish"){
  this.count = this.count + 1;
  this.dory = "Correct answer, it is Blue tang Fish";
}else if(this.dory == "Sardines fish"){
  this.dory = "Incorrect, answer is Blue tang Fish";
}else if(this.dory == "Star fish"){
  this.dory = "Incorrect, answer is Blue tang Fish";
}
//question 4 on movies
if(this.jungle == "Mowgli"){
  this.count = this.count + 1;
  this.jungle = "Correct answer, it is Mowgli";
}else if(this.jungle == "Harry porter"){
  this.jungle = "Incorrect, answer is Mowgli";
}else if(this.jungle == "Micheal"){
  this.jungle = "Incorrect, answer is Mowgli";
}
//question 5 on Movies
if(this.valentine == "Fifty shades freed"){
  this.count = this.count + 1;
  this.valentine = "Correct answer, it is Fifty shades freed";
}else if(this.valentine == "Black panther"){
  this.valentine = "Incorrect, answer is Fifty shades freed";
}else if(this.valentine == "Three Idiotssdc"){
  this.valentine = "Incorrect, answer is Fifty shades freed";
}
}

}
