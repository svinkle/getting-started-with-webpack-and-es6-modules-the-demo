const sayHello = (greeting) => {
    const currentHour = new Date().getHours();
    let timeGreeting = 'Good morning!';

    if (currentHour >= 12 && currentHour <= 17) {
        timeGreeting = 'Good afternoon!';
    } else if (currentHour >= 17) {
        timeGreeting = 'Good evening!';
    }

    return `${timeGreeting} ${greeting}`;
}

export {sayHello};
