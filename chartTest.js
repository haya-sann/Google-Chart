  // maximum value for the gauge
  var max_gauge_value = 40;
  // name of the gauge
  var gauge_name = escape('気温');

  // global variables
  var chart, charts, data;

  // load the google gauge visualization
  google.load('visualization', '1', {packages:['gauge']});
  google.setOnLoadCallback(initChart);

  // display the data
  function displayData(point) {
    data.setValue(0, 0, gauge_name);
    data.setValue(0, 1, point);
    chart.draw(data, options);
  }

  // load the data
  function loadData() {
    // variable for the data point
    var p;

      // get the data point
      p = 19.2367587;

      // if there is a data point display it
      if (p) {
        //p = Math.round((p / max_gauge_value) * 40); 
        p=myRound(p, 2);
        displayData(p);
      }

    }
function myRound(val, precision)
{
     //小数点を移動させる為の数を10のべき乗で求める
//例) 小数点以下2桁の場合は 100 をかける必要がある
     digit = Math.pow(10, precision);
 
     //四捨五入したい数字に digit を掛けて小数点を移動
     val = val * digit;
 
     //roundを使って四捨五入
     val = Math.round(val);
 
     //移動させた小数点を digit で割ることでもとに戻す
     val = val / digit;
 
     return val;
}
  // initialize the chart
  function initChart() {

    data = new google.visualization.DataTable();
    data.addColumn('string', 'Label');
    data.addColumn('number', 'Value');
    data.addRows(1);

    chart = new google.visualization.Gauge(document.getElementById('gauge_div'));
    options = {width: 200, height: 200, greenColor: '#039be5', greenFrom: -10, greenTo: 0, redFrom: 30, redTo: 50, yellowFrom:20, yellowTo: 30, minorTicks: 5,min: -10, max: 40};

    loadData();

    // load new data every 15 seconds
    setInterval('loadData()', 15000);
  }
