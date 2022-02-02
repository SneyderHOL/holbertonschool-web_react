// Brand convention & Nominal typing
interface MajorCredits {
  credits: number;
  brand: "major";
}

interface MinorCredits {
  credits: number;
  brand: "minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const sum = subject1.credits + subject2.credits;
  const major = {
    credits: sum
  } as MajorCredits;

  return major;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const sum = subject1.credits + subject2.credits;
  const minor = {
    credits: sum
  } as MinorCredits;

  return minor;
}

// const ma1 = { credits: 15 } as MajorCredits;
// const ma2 = { credits: 10 } as MajorCredits;
// const mi1 = { credits: 5 } as MinorCredits;
// const mi2 = { credits: 5 } as MinorCredits;

// console.log(sumMajorCredits(ma1, ma2));
// console.log(sumMinorCredits(mi1, mi2));
