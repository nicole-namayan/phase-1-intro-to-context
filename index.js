function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }

  function createEmployeeRecords(arrays) {
    return arrays.map((array) => {
      const [firstName, lastName, title, payPerHour] = array;
      return { firstName, lastName, title, payPerHour };
    });
  }
  
  function createTimeInEvent(employee, dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');
  
    employee.timeInEvents.push({
      type: "TimeIn",
      date,
      hour: parseInt(hour, 10)
    });
  
    return employee;
  }

  function createTimeOutEvent(employee, dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');
  
    employee.timeOutEvents.push({
      type: "TimeOut",
      date,
      hour: parseInt(hour, 10)
    });
  
    return employee;
  }

  function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find(event => event.date === date);
    const timeOut = employee.timeOutEvents.find(event => event.date === date);
  
    const hoursWorked = (timeOut.hour - timeIn.hour) / 100;
  
    return hoursWorked;
  }

  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date);
  
    const wagesEarned = hoursWorked * employee.payPerHour;
  
    return wagesEarned;
  }

  function allWagesFor(employee) {
    let totalWages = 0;
  
    employee.timeInEvents.forEach((timeInEvent, index) => {
      const timeOutEvent = employee.timeOutEvents[index];
      const date = timeInEvent.date;
  
      const wagesEarned = wagesEarnedOnDate(employee, date);
  
      totalWages += wagesEarned;
    });
  
    return totalWages;
  }

  function calculatePayroll(records) {
    let totalPayroll = 0;
    for (let record of records) {
      totalPayroll += allWagesFor(record);
    }
    return totalPayroll;
  }

  
  
  
  
  

  
  
  