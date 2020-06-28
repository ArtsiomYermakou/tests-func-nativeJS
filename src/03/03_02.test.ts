import {CityType} from "../02/02-02";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./03";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "Central str"
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "South str"
                    }
                }
            },
        ],
        citizensNumber: 5723897890
    }
})

//01. создайте в отдельном файле функцию, чтобы тесты прошли
test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000);
})

// 01. Тесты должны пройти
test("Budget should be changed for HOSPiTAL", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000);
})

//01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("House should be repaired", ()=>{
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})

//01. созадйте в том же файле ещё одну функцию, чтобы тесты прошли

test("staff should be increased", ()=>{
   toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
})

//01. созадйте в том же файле ещё одну функцию, чтобы тесты прошли

test("staff should be increased", ()=>{
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
})