function time() {
  // المتغيرات الخاصة ب الوقت
  let date = new Date();
  let hourTime = date.getHours();
  let minTime = date.getMinutes();
  let secTime = date.getSeconds();
  // ****************************************

  // المتغيرات الخاصة ب التاريخ
  let dayOfWeek = date.getDay();
  let dayList = ["sun", "Mon", "Tue", "Wed", "Thu", "Fro", "Sat"];
  let dayOfMonth = date.getDate();
  let month = date.getMonth();
  let monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let year = date.getFullYear();
  // المتغيرات التي موجودة داخل الصفحه
  let checkBox = document.querySelector("#checkbox");
  let am_pm = document.querySelector(".am-pm");
  let hour = document.querySelector(".hour");
  let min = document.querySelector(".min");
  let sec = document.querySelector(".sec");
  // ****************************************
  // وضع ما كتبته في صفحه HTML
  // الزر الخاص ب الثلاث نقاط لاظهار لائحة عند الضغط عليه
  document.querySelector(".i-dot").onclick = function () {
    if (document.querySelector("#list").classList == "list") {
      document.querySelector("#list").classList.replace("list", "ds-none");
    } else {
      document.querySelector("#list").classList.replace("ds-none", "list");
    }
  };
  // ****************************************
  // اضافة التنسيقات الخاصة بك في localStorage
  checkBox.addEventListener("change", function () {
    localStorage.setItem("h-format", checkBox.checked ? "24" : "12");
  });
  // في حالة كان localStorage فارغ قم باضافه هذا الشرط
  if (localStorage.getItem("h-format") == null) {
    localStorage.setItem("h-format", "24");
  }
  checkBox.checked = localStorage.getItem("h-format") === "24";

  // ****************************************

  // في حالة اراد المستخدم تنسيق الوقت  24 ساعة
  am_pm.innerHTML = checkBox.checked ? "" : 12 > hourTime ? "Am" : "Pm";

  //   متغير استثناء لجعل الوقت 12 ساعه بدلا من 24

  let hourTime12 = 13 > hourTime ? hourTime : hourTime - 12;
  //هي اداة ستجدها في اصدار 2017 padStart()
  hour.innerHTML = (checkBox.checked ? hourTime : hourTime12)
    .toString()
    .padStart(2, "0");
  min.innerHTML = minTime.toString().padStart(2, "0");
  sec.innerHTML = secTime.toString().padStart(2, "0");

  // ****************************************
  // وضع التاريخ في الصفحة
  document.querySelector(
    ".date"
  ).innerHTML = `${monthList[month]}, ${dayList[dayOfWeek]} ${dayOfMonth}`;
  // ****************************************

  // دالة وظيفتهااعادة قراءة الكود  كل لحظة

  setTimeout(time, 100);
  // ****************************************
}
time();

// دالة وظيفتها قراءة الكود  كل لحظة
// setInterval(time, 100);
