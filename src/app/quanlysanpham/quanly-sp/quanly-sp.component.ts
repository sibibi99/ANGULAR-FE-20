import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quanly-sp',
  templateUrl: './quanly-sp.component.html',
  styleUrls: ['./quanly-sp.component.css']
})
export class QuanlySPComponent implements OnInit {

  public DSSP:any = 
  [
  {MaSP: "DT", TenSP: "Iphone ", Gia: 10000},
  {MaSP: "DT", TenSP: "Blackbery", Gia: 10000},
  {MaSP: "DT", TenSP: "SamSung", Gia: 10000},
  {MaSP: "DT", TenSP: "Motorola", Gia: 10000},
]

AddSP (m,t,g){
  this.DSSP.push({MaSP: m, TenSP: t, Gia: g});
  // document.getElementById('maid').value = '';
  // document.getElementById('tenid').value = '';
  // document.getElementById('giaid').value = '';
}

  constructor() { }

  ngOnInit() {
  }

}
