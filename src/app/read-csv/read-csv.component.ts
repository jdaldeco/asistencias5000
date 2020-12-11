import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Sesion } from '../models/sesion';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-read-csv',
  templateUrl: './read-csv.component.html',
  styleUrls: ['./read-csv.component.scss']
})
export class ReadCSVComponent implements OnInit{
  title = 'Leer archivos CSV';
  public archivos: any[] = [];
  @ViewChild('csvReader') csvReader: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  
  constructor() {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }
  
  uploadListener($event: any): void {
    let text = [];
    let files = $event.srcElement.files;
    
    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        console.log(csvRecordsArray); 
        
        this.archivos = this.getDataRecordsArrayFromCSVFile(csvRecordsArray);
        this.dtTrigger.next();
      };
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }
  
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any) {
    let csvArr = [];
    for (let i = 3; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<any>csvRecordsArray[i]).split('\t');
      console.log(curruntRecord); 
      
        let csvRecord: Sesion = new Sesion('',[[],[]],0,'','');
        csvRecord.nombreAlumno = curruntRecord[0].trim();
        csvRecord.asistencia = curruntRecord[1]; 
        csvRecord.curso = curruntRecord[2]; 
 
        csvArr.push(csvRecord);
    }
    return csvArr;
  }


  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }
  
  /*getHeaderArray(csvRecordsArr: any) {
    let headers = (<any>csvRecordsArr[0]).split('\t');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }
*/
  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.archivos = [];
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
