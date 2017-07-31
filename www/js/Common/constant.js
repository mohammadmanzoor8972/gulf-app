angular
  .module('HRMS')
  .factory('CONSTANT', function(){
    return {       
        'BASEURL'  : "http://eolmobile.essar.com/ias_relay_server/nfareleaseprod/HRMSOdataService/Service.svc/", 
        'Dashboard' :   [
                            {Title:'Complaints', icons:'ion-chatbubble-working', badge:0, url:'/app/complaints', isActive:true},                            
                        ],
        'APPLICATION' : {
            NAME : 'HRMS',
            PORT : 4030,
            COPYRIGHT : 'xyz'
        },
        'API' : {
            VALIDATE_USERS : 'ValidateLogin',
            PAY_SLIP : 'PaySlip',
            EMPLOYEE_LOOKUP: 'EmployeeLookUp',
            GET_PF: 'GetPF',
            OFFICE_TIME: 'OffieTime',
            OPTIONAL_HOLIDAY:'OptionalHoliday',
            CALENDAR_HOLIDAY:'CalendarHoliday',
            LEAVE_TYPES:'LeaveTypes'
        },
        'MESSAGES' : {

        },
        'AUTHOR' : {
            NAME : 'Mohammad Manzoor Alam',
            DESIGNATION : 'Sr. Software Enginner',
            MOBILE : '91-9028753596',
            EMAIL : 'mohammad.manzoor8972@gmail.com',
            CREATED_ON : '30 Dec 2015',
            MODIFIED_ON : '29 Nov 2015'
        }
    };
  })
