const input_p = document.getElementById("input_p");
const input_s = document.getElementById("input_s");
const input_e = document.getElementById("input_e");

const input_p1 = document.getElementById("input_p1");
const input_p2 = document.getElementById("input_p2");
const input_p3 = document.getElementById("input_p3");

const input_I1 = document.getElementById("input_I1");
const input_I2 = document.getElementById("input_I2");
const input_I3 = document.getElementById("input_I3");

const result_area = document.getElementById("result");
const jouken_area = document.getElementById("jouken");
console.log("pukepuke")

function keisan() {
    const pi = 3.14159265;
    const P = Number(input_p.value);
    const E = Number(input_e.value);
    const S = Number(input_s.value);

    const p1 = Number(input_p1.value);
    const p2 = Number(input_p2.value);
    const p3 = Number(input_p3.value);

    const I1 = Number(input_I1.value);
    const I2 = Number(input_I2.value);
    const I3 = Number(input_I3.value);

    const data1 = (1 / I1) * ((1 / 4) * ((pi / 3) - (Math.sqrt(3) / 2)) * p1 ** 3 + (2 - Math.sqrt(3)) * S * p1 ** 2 + (pi / 6) * S ** 2 * p1)
    const data2 = (1 / I2) * ((pi / 12) * p2 ** 3 + (Math.sqrt(3) - 1) * S * p2 ** 2 + (pi / 6) * S ** 2 * p2)
    const data3 = (1 / I3) * ((1 / 4) * ((pi / 3) + (Math.sqrt(3) / 2)) * p3 ** 3 + S * p3 ** 2 + (pi / 6) * S ** 2 * p3)

    const result = (2 * P / E) * (data1 + data2 + data3);

    const jouken = result / P;

    result_area.textContent = `δ = ${result}`;
    jouken_area.textContent = `δ/P = ${jouken}`;
}

const input_area = document.getElementById("input_area");

input_area.addEventListener("input",() => {
    keisan();
})