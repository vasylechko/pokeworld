import { format as TimeagoFormat, register as TimeagoRegister } from "timeago.js";
import { uk as locale_UA } from "timeago.js/lib/lang";

class DateService {
  getTimeAgo(date) {
    TimeagoRegister("ua", locale_UA);

    const activeLanguage = "ua";

    return TimeagoFormat(date, activeLanguage);
  }
}

export default new DateService();
