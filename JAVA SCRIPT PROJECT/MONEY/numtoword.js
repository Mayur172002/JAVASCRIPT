function numberToWords(number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten'];
    const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    if (number === 0) return 'zero';

  
    function convertLessThanThousand(num) {
        if (num >= 100) {
            return units[Math.floor(num / 100)] + ' hundred ' + convertLessThanThousand(num % 100);
        } 
        else if (num >= 20) {
            return tens[Math.floor(num / 10)] + ' ' + units[num % 10];
        } 
        else if (num >= 11) {
            return teens[num - 10];
        } 
        else {
            return units[num];
        }
    }
  
    let words = '';
    if (number >= 1000) {
        words += convertLessThanThousand(Math.floor(number / 1000)) + ' thousand ';
        number %= 1000;
    }
    words += convertLessThanThousand(number);
  
    return words.trim();


 
  }
  