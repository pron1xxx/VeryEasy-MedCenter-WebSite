let workers_photo = []
for (let i=1; i <= 10; i++) {
    workers_photo.push(`./image/workers/image${i}.png`)
}
const workers_names = ["Ефименко Владимир Николаевич", "Наурбиева Елена Николаевна", "Малеванец Оксана Олеговна", "Зонова Анна Владимировна", "Буваненко Олег Николаевич", "Блинова Марина Николаевна", "Бугаев Вова Станиславович", "Ефремов Михаил Евгеньевич", "Забунян Грант Андроникович", "Обедзинская Виктория Ивановна"]
const title_workers = ["Невролог", "Терапевт", "Оториноларинголог (ЛОР)", "Гинеколог", "Эндокринолог", "Кардиолог", "Травматолог-ортопед", "Уролог", "Челюстно-лицевой хирург", "Врач УЗИ"]

const parent_div = document.querySelector(".workers_cards")

for (let i=0; i < workers_photo.length; i++) {
    parent_div.insertAdjacentHTML(
        "beforeend",
        `
            <div class="worker_card"> 
                <div class="worker_photo"> <img src="${workers_photo[i]}" alt=""></div>
                <h1 class="worker_name">${workers_names[i]} </h1>
                <h2 class="job_title"> ${title_workers[i]} </h2>
                <button class="painted_button signup_btn"> Записаться </button>
            </div>
        `
    )
}

const select = document.querySelector("#worker-select")

for(let i=0; i < workers_names.length; i++) {
    select.insertAdjacentHTML(
    "beforeend", 
    `
    <option value="${workers_names[i][0]}${title_workers[i][0]}">${workers_names[i]}</option>
    `
    )
}

function generate_month_days(start_day, last_month_last_day, weekends, this_month_last_day) {
    const days_grid = document.querySelector('#days_grid');
    days_grid.innerHTML = '';
    
    // Дни предыдущего месяца
    for (let g = 0; g < start_day; g++) {
      days_grid.insertAdjacentHTML(
        'beforeend',
        `<div class="day prev-month">${last_month_last_day - (start_day - g - 1)}</div>`
      );
    }
    
    // Дни текущего месяца
    for (let day = 1; day <= this_month_last_day; day++) {
      const is_weekend = weekends.includes((start_day + day - 1) % 7);
      days_grid.insertAdjacentHTML(
        'beforeend',
        `<div class="day ${is_weekend ? 'weekend' : ''}">${day}</div>`
      );
    }
    
    // Дни следующего месяца (чтобы заполнить последнюю неделю)
    const remaining_days = (7 - (start_day + this_month_last_day) % 7)
    if (remaining_days !== 7) {
      for (let day = 1; day <= remaining_days; day++) {
        days_grid.insertAdjacentHTML(
          'beforeend',
          `<div class="day next-month">${day}</div>`
        );
      }
    }
  }
  
  // Пример вызова:
  // start_day: 3 (первый день месяца - среда)
  // last_month_last_day: 30 (в предыдущем месяце было 30 дней)
  // weekends: [5, 6] (суббота и воскресенье - выходные)
  // this_month_last_day: 31 (в текущем месяце 31 день)
  generate_month_days(3, 30, [1, 4], 31);


const days = document.querySelectorAll('.day') 
function set_day() {
  for(let i=0; i<days.length; i++) {
    days[i].classList.remove('active')
  }
  this.classList.toggle('active')
  
  document.querySelector("#not_time").classList.remove("active")
  document.querySelector(".block3").classList.remove("active")

  if (this.classList.contains('weekend') || this.classList.contains('prev-month')) {
    document.querySelector("#not_time").classList.add("active")
    for(let i=0; i<times.length; i++) {
      times[i].classList.remove('active')
    }
  }
  else {
    document.querySelector(".block3").classList.add("active")
  }
  
}

const times = document.querySelectorAll(".time_li")
function set_time_li() {
  for(let i=0; i<times.length; i++) {
    times[i].classList.remove('active')
  }
  this.classList.add("active")
}

for(let i=0; i<days.length; i++) {
    days[i].addEventListener('click', set_day)
}
for(let i=0; i<times.length; i++) {
    times[i].addEventListener('click', set_time_li)
}

const signup_buttons_generate = document.querySelectorAll(".signup_btn") 
for(let i = 0; i < signup_buttons_generate.length; i++) {
  signup_buttons_generate[i].addEventListener('click', open_signup_form);
}