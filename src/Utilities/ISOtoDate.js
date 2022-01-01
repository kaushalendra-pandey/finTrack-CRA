const ISOtoDate = (ISODate) => {
    let date = new Date('2021-09-16T10:20:00.000Z');
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();

    if (dt < 10) {
    dt = '0' + dt;
    }
    if (month < 10) {
    month = '0' + month;
    }

    return year+'-' + month + '-'+dt 

}

export default ISOtoDate