const test = []
this.test.forEach(element => {
  let names = element.title
  if (element['other'].length) {
    element['other'].forEach(el => {
      names += '/' + el
    })
  }
  test.push({
    title: element.title,
    type: 1, // 1 - фуфло, 2 - гомеопатія
    key: element.id,
    names: names,
    reason: element.contents,
    link: element.source
  })
})
console.log(test)
