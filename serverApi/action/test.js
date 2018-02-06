var dao = require('./chitgroupDao');
var cDao = require('./customerDao');
var eDao = require('./employeeDao');

//dao.putChitGroupData({ groupcode: "X002", groupName: "10L10M PRME2", chitValue: 1000000, months: 10, subscription: 100000 });
//console.log('###### 2');
//dao.getChitGroup('X002','10L10M PRME2');
//dao.scanChitGroupAll();

//cDao.putCustomerData( { customerCode: "C10191", customerName: "RAMESH", address: "Hyderabad", phone: "77777", email: "ALURI@GMIAL.COM" });
//cDao.putCustomerData({ customerCode: "C10192", customerName: "Raju", address: "Pragatinagar", phone: "8888888", email: "ALURI@GMIAL.COM" });
//cDao.putCustomerData({ customerCode: "C10192", customerName: "Alluri", address: "Cyberabad", phone: "999999999", email: "ALURI@GMIAL.COM" });
//console.log('##############################');
//cDao.getCustomer('C10191','RAMESH');
//cDao.scanCustomerAll();

eDao.putEmployeeData({ employeeCode: "EMP001", employeeName: "ENAME 1", address: "Address 1", phone: "pone 1", email: "email@com.1" });
eDao.putEmployeeData({ employeeCode: "EMP011", employeeName: "ENAME 2", address: "Address 2", phone: "pone 2", email: "email@com.2" });
eDao.putEmployeeData({ employeeCode: "EMP021", employeeName: "ENAME 3", address: "Address 3", phone: "pone 3", email: "email@com.3" });
eDao.getEmployee('EMP001','ENAME 1');
eDao.scanEmployeeAll();