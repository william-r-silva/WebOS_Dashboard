class Common {
    static WEEK_DAYS = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];

    static getWeekDayName(weekDay){
        weekDay = weekDay+1;
        weekDay = weekDay > 7? 0 : weekDay
        return Common.WEEK_DAYS[weekDay];
    }

    static MONTHS = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    static getMonthName(monthNumber){
        if(monthNumber > 12 && monthNumber < 1){
            return "Não identificado"
        }

        return Common.MONTHS[monthNumber];
    }
}

export default Common;