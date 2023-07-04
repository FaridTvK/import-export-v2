import cowsay from "cowsay";

const kids_eyes = "..."

const mother_eyes = "oo"

export const DIALOG = () => {
    console.log(
        cowsay.say({ text: "should i get up today", e: kids_eyes }),
        cowsay.think({ text: "but i hate mondays", e: kids_eyes }),
        cowsay.say({ text: "Nah doesn't matter", e: kids_eyes }),
        cowsay.say({ text: "Get THE FUCK UP", e: mother_eyes }),
    )
}