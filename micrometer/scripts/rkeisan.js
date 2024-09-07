const input_r0 = document.getElementById("input_r0");
const input_r1 = document.getElementById("input_r1");
const input_r2 = document.getElementById("input_r2");
const input_r3 = document.getElementById("input_r3");

const input_b1 = document.getElementById("input_b1");
const input_b2 = document.getElementById("input_b2");
const input_d = document.getElementById("input_d");
const r_area = document.getElementById("r_area");


r_area.addEventListener("input",() => {
    const r0 = Number(input_r0.value);
    const r1 = Number(input_r1.value);
    const r3 = Number(input_r3.value);

    const r2 = (r1 + r3) / 2;
    input_r2.value = r2;

    const p1 = (r0 + r1) / 2;
    const p2 = (r0 + r2) / 2;
    const p3 = (r0 + r3) / 2;

    input_p1.value = p1;
    input_p2.value = p2;
    input_p3.value = p3;


    const b1 = Number(input_b1.value);
    const b2 = Number(input_b2.value);
    const d = Number(input_d.value);

    const I1 = (b1 * (r1 - r0) ** 3 - (b1 - b2) * (r1 - r0 - d) ** 3) / 12;
    const I2 = (b1 * (r2 - r0) ** 3 - (b1 - b2) * (r2 - r0 - d) ** 3) / 12;
    const I3 = (b1 * (r3 - r0) ** 3 - (b1 - b2) * (r3 - r0 - d) ** 3) / 12;


    input_I1.value = I1;
    input_I2.value = I2;
    input_I3.value = I3;

    keisan();
})