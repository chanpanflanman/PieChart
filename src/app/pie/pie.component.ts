import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, defaults } from 'chart.js';

@Component({
    selector: 'app-pie',
    templateUrl: './pie.component.html',
    styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit, OnChanges {
    @Input() tableNames: any = [];
    @Input() tableData: number[] = [];
    @Input() requestedPieChart: boolean = false;
    @Input() tableCategories: any = []
    data: any;
    options: any;
    labelName: any;
    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.requestedPieChart) {
            this.func();
        }
    }

    func() {

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        this.data = {
            labels: this.tableNames,
            datasets: [
                {
                    data: this.tableData,
                    backgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--blue-400')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--blue-500')]
                }
            ]

        };

        this.options = {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context: any) => {
                            
                            let generateLabel;
                            
                            for (let i= 0; i < this.tableData.length; i++) {
                                if (context.label == this.tableNames[i]) {
                                    generateLabel = `${this.tableCategories[i]}: ${this.tableData[i]}`;
                                }
                            }
                            return generateLabel;
                        }
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
    }
}

