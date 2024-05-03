async function waitForElement(selector) {
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            const claimBtn = document.querySelector(selector);

            if(claimBtn) {
                clearInterval(interval);
                resolve(claimBtn);
            }
        }, 1000);
    });
}

async function main() {
    const claimBtn = await waitForElement('[aria-label="Claim Bonus"]');
    console.log(claimBtn);
    claimBtn.click();
    console.log('Bonus Claimed! at ' + new Date().toLocaleString());
    
    main();
}

main();