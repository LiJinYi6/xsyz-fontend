function getCurrentDate(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以需要+1
    const day = now.getDate().toString().padStart(2, '0');

    return `${year}.${month}.${day}`;
}

export default getCurrentDate;
