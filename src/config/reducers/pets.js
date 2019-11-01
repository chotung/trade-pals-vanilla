const initialState = [
  {
    name: "Char",
    imgUrl: "https://ewscripps.brightspotcdn.com/dims4/default/f70897b/2147483647/strip/true/crop/508x286+66+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.ktnv.com%2Fphoto%2F2017%2F08%2F15%2Fhusky3_1502798898905_64205695_ver1.0_640_480.JPG",
    sex: "Male",
    age: 3,
    location: "NYC",
    price: 69,
    breed: "husky",
    isAvailable: true
  },
  {
    name: "Dar",
    imgUrl: "https://www.rover.com/blog/wp-content/uploads/2019/07/maltese-puppy-960x540.jpg",
    sex: "Female",
    age: 1,
    location: "MD",
    price: 'priceless',
    breed: 'Maltese',
    isAvailable: true
  },
  {
    name: "Mimo",
    imgUrl: "https://thehappypuppysite.com/wp-content/uploads/2019/06/Mini-Shiba-Inu-HP-long.jpg",
    sex: "Female",
    age: 4,
    location: "NYC",
    price: 2,
    breed: "Shiba Inu",
    isAvailable: false // temporary state should be used with model
  },
  {
    name: "Laura",
    imgUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEBMVFRUVFRUVFxUVFRUVFRUYFRcWFhUVFhUYHSggGBolHRUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0dHR0tLS0tLS0tKy0tLSstLSstKystLS0tLS0tLSsrKy0tKy0tKy0tLS0tKy0rLSstLS0tLf/AABEIAK8BIAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEcQAAEDAwEEBggDBQYDCQAAAAEAAgMEESExBRJBURNhcZGh0QYUIjJSgbHwk8HSU5KU4fEHFSNCVKJicoQWJDNDRGRzgoP/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAJREAAgICAgIDAAIDAAAAAAAAAAECEQMhElEEMRMiQTJSFEJx/9oADAMBAAIRAxEAPwDNr1lduLoYmopZRZesiOjXhGsawey9uonol7okrMDbq4WIvol7oUrGAjGpwx5RXQqccWUjYaCKRiZMYh6ViPY1CwUAVDEqqGJ5UtSmoalbGSFrmLwjRBapNYksokUNjVojVzI1cI1uRqBxEvdEjBGu9GjyBxAjEqnRpk6NUvjTKQOJ6jandGMhLKZibUgyFDLItBGio9ERKcKijGFfKMJISFmjMbZesxWLTbYCzNYF6EHohJbAgr41TZXMRYUNaRHNQNIjmqMih4apvQpQE1oCoyMx5AMLro1Km0VpRSIN7PnzKDqXH0VuC0kNLhQmpUH5LR0LGmZk0qk2kTd9OpxU6P8AlB+EUCjXfU08FOumnSPyhlgEXqa96onfq64adJ/lDfAJHUygIcp2+BCvhVIZeQksdFMDEYxqriYiWtViH6AVISqcJzVNSmcZSsZAdlY1qt6IDLsBDTV7RfdS1fof17CmMV7WJI6ud98Fx1c/GU3Bg5o0AYu7iTRbWcNco6LazThwtdK4tBTTC3MVL2osWcLtN1VI1LY1EYAmdIMpfC1M6UKGRlYIf0YwiZG4VFHor5dEsGJNGa2wxZauatRtY6rN1oXo43ohJbFtlaxRsrWBOBDGkRzUHSBHtYpsYhZNKFLtxMKQ2U5IzH9KcK8lCUsiuMiy9EGtlEUarnYr4lVOvOkztj7F0rFKJi7IpRqTkdCRYGLhaukqJcptsokc3VzcXbrwKW2NRXIxByMR70DPIBkmy7vHObKVtblRnrWNvkXGbcT2JPtbbTWtIYfaHzCyctc6Q3dcdd16KOJo0Nb6QjIGh0PJUDbg5C/OyQVDwBc6HvPdlA+sk+yMDTPHt5JuKYOTQ8rNqF+pxy/khBJfVCRxm2f6WU3PtpxyPlqE6VeiblZeZSD4fUfkoesdyHmluqg63Hr8kTWMW1CsMo17kuhOfv5nuV7M2+i1G5Deg2kWYvhOafabX62HWslI/wAD26KmWt3TYa8hz61OWNMpHK0fQ4bcCO9H0pGF8yZtF3F3j5J5sjbu4faOOvJXLl8d1o6IZkz6jR6IibRJdlbWY8CxHZx7Sj5awWXLG1plJKxLtULOVoTralSMrM11YF343ohJbKyrGpa6tXvXlWxUaWjcm8QWZ2bVXT+CXCVhoukAXY5FS965EcrC0OqaREF6BpUYGrUIwqNVTqcZVUxXkTZ3RWwR66xccutUi6RIlRJXiVG6AyO3XQVFcKFBFu2dsthB4lYbavpA6S+ueX5qn0krC+oeAcB1h8kqqJCB9he5gwKMUeVmzttoGnq3OdqUVC3dyTpx5IaJls3C9WGzQCcnPHXmuhogpE3jpX7x00ANxjt5o6OMAWzbrO8P6IGnYGjDr/M/0RTHWF7/AEt3I0Cwh5ti2EK946vvgpmUnrH5c0tnm15LMAQ6W/H5/fFR3+PXp34+iAcV2KXr+9crBGDJgBf7zZX9Pp9RqlhkV1LMsAYAX42HE8vJD1VOLHdBA521CsYTwOefXzsrN6+cu6zoPlxWoNgdK46DJHAk/TirXTnQ4/5bW81TUu3TcDTiMW7QvPbc3vgoUbkOdk7aMbvacbduq2LNtNcy7b6L5aWluunXzTDZtc5hAv5FRnhT2WhmrTH21tvajRZyp2pfimNbs+OYb0Z3Xcs2WaqIS0kHULRjQZMJO0F0VqADVbGxM0gKzXej85Nlt6MYXz70efYhbyjlwE6haFlPiwqVi5TtyvOkXacqco0PGXIcUjUfupfSyI0zLIWSPRlVzFdjcq5SvDk9npRQO5eBXnKN0Ch1zlU565I5DveikawgSrpkwbIPfVkTkyiBs+W7UaWSPB13ihHHQ9y0vp3R7soeNHjussoyYk47AF9BjlyimeLkjxk0F00V7l2gF7cB/NASVG9ITy+dvkj66Tcjtz8UjZIWvIOt88CmYo2a3jcW7CL/AJlTaCdMqiEgnOqYQyj3W5IFy429lAJTVncZawB5cUpfIb5R21mOtvYc3TeaQbdRtogXNuswEXOuFEFdY26i5uUAky9TY4DVQK4G3RANWPDhjgombtNuv6KrZjzfAJtyF7IqqIcLjXjz7kTFZzkfXzVcORpjOnC30VJdyJV9Ablwve9j3IIxx3YpM+/JWObY3VLnJjBHS5HA9XHrVe0mb5B42yqoZLpzBR3aL8lOSHjKjOtpCrBFZaI0OEFU01kjiykJqyvZTsrZ7PlNgsTQmz1stmnAVsD0R8n2Nd5XwlUNarWo5kDBIOjnsrDVJcXFVlxXKmdbQ6ZUrvTXSA7QAV8NbdeTPE0zvjJDjfXCUJFLdEXUqocjIhnhEOKgAqRAyixVkQVm6rI2qiFYt9ItlesQlv8Am1aescF8rhitIAeBI+ei+1SShouV8t2pG0VMjh7vv/Mr0vGnrief5Ef9hbUxGSVjOZAPfc+CC9IYv+8OI45TjZgvIX8B7I7cX7vzS30hgIkvnKs39qIpfWxdA9w5/fYjaynIZGXPO4+/st4kEAlx4nP0VMLsFF0j2PYYZSQL7zHDO6Tg9oToRhLY6dsDehbK2Td3ajfc0xPD77u43W4NvkOtC1dCGN14IqHY7W2JkL7EWAbug8uJ71GYuk9m1mtJHb1pnsVKhbA1RLc/femZobYF1EUh5a+H3hLQRdMFbHRuc0kcB+SINLc50RFMdxpZrvXN+SNGCJ6a1NvxVUce66wp2BxmcAS10srrWAuCQNLW0SjpHubvOGRgPA9l/wDwu6+N1dJQTAbrRcOsDZ9hg4uTwyq609HGIQQTfecR2YHyRdAVgbpsKWzZ/a7sod7LLtEPaNuV0oR/UW+/vqQkj0RM72R2f1Sy/BECGOy4994HXc9i07pAFnqJ4iHWdfJek2ikch+LHkk4SurlQDtoKiSoJSSkUhCi2B/trY7IdcLEwHIWv2LJhPhYudGoiGFNqhTuuFaVSe0Qx6ZBwVZCscqXvXE/Z6EdoytVM66NoZThVTQ5RtJCo5WiuNMdUTkwultIEddcMvZ0o64qAeuPKqJTJGsvD1x1UGpdU1m6kldWkq0cbZOU0gna21C64BwsbtUSPdutNgR7TkynkXaaj3suXZjXE5J/bRPZlNYDg1o+ygtusEu8Wf8Altuey9ldtKvDRut7Eu2dU3bOL5IA+V8q2KDnMnkkoxoTQnUKUcu6b2HVdTqaYsd1FVhUeiPsZwVj3C5OeHbw+QTGnj56/L8kooWXIT6FtuHflGLFaPRxn71V24ANFRNUBql60CNUwCBiGbBBVJLcjI6kyGRhBVRFiHDPz+ysYDnrriyVNy5Tn1VTTlJYT1Se1EbEh3nG5tcEd+EC7JR0YMbgNDYHvyhL0NH2MHElhB4A+HL53SyLGe5GSylrgT7r8fM4t1JrWbMZuDd1AASznoeENszzpCokrrmm6iWpBzoKsaVWIyrRGVmgplkRytTsV2iysQyFp9k6hPiJ5vRsKfRWPchqY4V0jsKzOVFE1RZLKivsu10izVdUG6hOGzrxz0a+WlyiIYbJkIFwxWXlTnbPUjEqiFlfvKsrhcphJOKCrqgNCIc9Zjbdbm110YocmSyS4ohPV7xQhcSq2lNKKIDhddnE5bsBZAG+09L9p7YHusxZMNqVeCAFkq25JJTxSEm2iueqLjlPPR6nBppnWyTh3INtceKzD19G9GaMija4AWdFJg8XE3GOIwuzx6UrOTJtCJtGJoiG5kBvy8TwskDwQbHhghbbZ2z5nxSVMIBaHEGJpO8LZx1LOVFP7dyWkHPC+ewJ/KglJiYJNx2d2aw3v+du5edXv37cB+SvqJSxgDD3JfRhxdfX69q5/RZhVQ1zjjKgWPAsQm+zXxk/4hAH1Tiu9Xc0dG75WAsio3sF0ZltSWt610VHSMOtxxA+q5XWHu5HVzQuzqrVpbhYwvnOc6qkuTXaVML3GnV5pZu8LfmloNk6OK7uzJXJJbvJ60WLQtG8ASTcj8kvkkDnFwFgSTYaC6tlhwil+/pLHPk216GdPUYyARjVGs2oA6xN0iM9hYKdNIL5XLKJ0xkPpdn73tN0Kg2g6kZsmoFtcckbJYIQ3obJraFbaBRkpbJkZQhKiUKrSojFuxTMyxT/AGU7RIKh+U52U64CTH7KZf4mxpHYV5yEDRHCJurs5BZtFqy1eMrW1ous3tCNTmWxn01oVciqFQq5Jl4so7Pai9HJXKrfVcr1WCgkE7VyWaVhNpTkvW2qRdpWOrGMjJc4tLybMbqT1hvHtOF2+OcnkFtI3nbtJ0RU22oIwWglxtndGO9LYWAA7zruIJLtf3RwAwkfR9JK4N0Byez+a6VE5nOvQwrNqBxwCOq3BJp3k8UxfHui1rWOvHPFBuYHO9m5Nr21tzTJUI3YIAvquwY4W09G6Um+Y2AaEl267eHYV8ynisvoforWONCBEwPkEjm2J91rmh+8ORu1dXj1s582qHXoU1zY304PRh00jJHnUub7rG8AS2/csh6a7PZTVjoo2kN3WuF8ajh3LcbFrnGeaJrWlokjnYD7xD8uIB94jW/BLf7SdiiaJlVA15c3e6Qbrg8tBsSQ7Ise9N5FuTb/AHZsVJGElcHNtbHC+CFVRANN+IOOXzUIn+zjsNtFQbgrnZU5VwW9uJ/sXA3XEB4cbktAB9oD4utUmV+A024ZOPmiei56nrVTYbXuDx6kthoOgZuNO9IHPdb3TcNt18T2KiF2643Hcht+yuidxJvbT+aZAYfUG4GBnQXAJKpYGteSQbNOTnQa7vG55qNHBJPK2OIAuJ5hoA4m/LsT/wDtEkbRsg2fFbfY0zVRGf8AFmsWxX1AY23eFTHNRlZOcXJUYuun6R5cBugnDcndHK51Q114qJPNI227YyVaRNuVdGqWI+Knva2vH56JJMeKLqWu3E6g2pG5tnG2NeSQvpy3JA+quoXAnJHO/WFN9oon+MJnqnDOo5jRCOrCUWagAXbyzfj2hUwRxycLHm3T91a2FJA4ddPdkuwlFRTFh1uDofyPJMdlFGGpGyfxNfs96PvdKtnvTZi6GcQPVxYWd2jEtTMzCRbRbqpyKw9jfpip9KhunCsEgXjyPcii9uVLdVbHq0lSHooqgd1wbqQQO22F86kqms1baTLSTk3va919GldhYj0nga91xYO45tddvizp0/05PKx2rX4L5qvdhPRuJc8gPOha1uQwdRNr9ih6PECWNrrWkeC6+PZB+mqVyEjDlyCpLTe+e1egjzWGyzuc4hwIOnXfrUdmxlxI4neA53aC4gddgUMaslwJ15o2nr2MDnD3iWubyaR/m+o7CjQCBs5hHVcdrdfBMPRjbnQtlj3i3f3S141aWnh2glKY5Gkndx7xa297cQLnXS3WhCwowlwdmlHkjft2jG6enc2UNMIA33AgP3Ddt+0Gy0UHpvTP3/Wd5pe7ckjZ7THgH2X71rgAYIGq+QxucOa8Xuvf+S6HnUkuS9ElicfTH/pTDGydzqWxiJuN2+40nNm8gtqf7P8AdDd6VxNhewABxkDkLr5kdoyEbpeS24NjpcdS+5+hvpPHWwhx9mSMNbIw8DbDhzabYXNNq9ejt8aKlqXsA2V6KQRnLA48S7P1Vm2PRmGVuGAHgRgjuT+rqmDQj+qpdUN0utyR2fAmfNq70KkDiIyCNBvY8QshW70T3xvbuuY4teOw4I8190rqiOKN0srg1jRcuJA+Q5nkOK+BbYrjPPLNp0j3OA5AnA+Qst/w5M+NR9DH0X2xFS1UdRNEZhES9sdwAZAP8MuJ4B1j8kr2nXvqJpJpTvPle57j1uNzbq5dSHV9K8A+0LoHOkDkLi0O0J4XMFm56khLEFKwuNEoclMqaezdwe8468gNUFSMIc08nDr8FbHLYZBvc5t3rNJmVosB3scPDtUBJY7rdM9/FdhmDY3gavIb1gNIcTbrO6PkVUyUAWRoGxrCzebcZI167Z+n5oahIEhbpnHDU4uo7Pr2xODxc2v7NsZBAQpcDY6+yAR1jHcjo2x1JJb3hvNy14BsQQbX6yEZs5iUwudnftk3te5v1p3s9ynavRWnx2PKIJjHIgaXRFNKsc9Fk9VYJDtGqR9W8pFWuUZsvjQy/wC0cnwQfgtUh6SScGw/gt8lmGmTl9F0CTl4jzXD8R6vyLo07fSWXlF+E3yUx6Ty8ovwmeSy7WS8vEeam2OXl4t80PiN8i6NKfSWU/5YfnDH5Kp+2yfehpT1+rx+SQ7kvLxb5rhjl5eLfNZY2bmuhyNpNOtPSHtpovJeFez/AE1H2eqxeSUNp5vh8W+amKeb4fFvmjUuwXHodeuRn/0tIP8Apoz9Qp+tR/6aj/hYvJJRTT/D/ub5qz1Sf4T+83zQqfYfp/UbjaDAcUtFn/2kPZjC63aDP9LRfwcP6UndSVHFp/eZ5rnqs/w/7m+aP37NUP6joVzP9PRDspIf0rxq4/2FH/CRfpScUFTruH95nmueo1Pwn95nmt9+zfToauqIzrBSfw0X6VOKta3McVPGSLHchawkcjYZCTep1Ou6cf8AEzzXfU6i1y3H/MzzWqfZlw6HBrze5EJ//MY7Fz+8D8MX7gSf1afke9nmvGmqPh8WeaWpdjcl0OKnaBkaGyCF7RkNfG1wB5gOuLoYdGB/4FIf+nZ5IB1NONW+LPNRNPP8Pi3zRqfYr4v8GI6L9hSfgM8lFzYv2VN8qeP9KA9Xn+Hxb5rj4J+LfFvmt9+wVDoN3ItOjg/Aj/SvdHF+zp/wI/0oH1ef4fFvmu+rz/D4t80ft2Co9B4ZF8EH4EX6V49F8FP/AA8X6EuMM/w+LfNcME3Lxb5rfbsP16GJ6O1tyC3/AMEX6VU7o/gp/wACL9KC6Gbl4t81F0MvLxb5o/bsFR6DwY/2dP8AgR/pXt2L4IPwY/0pf0Mvw+LfNe6Cb4fFvmtvs1LoPPR/BD+Ewfkuiqt7vRDsij8kuMEvLxb5qsxS8vFqyvsDrobf3rIMBzPw4/0qH98S/G39xnklDo5OX0UdyTl9E9y7JuMehudqyHVzD/8ARnkqH7QcdeiPbFH5Ja5knL6KBY/l9Ed9m0vSP//Z",
    sex: "Female",
    age: 2,
    location: "NYC",
    price: 3,
    breed: "Inu",
    isAvailable: false // temporary state should be used with model
  },
]




const pets = (state = initialState, action) => {
  switch (action.type) {
    // case 'UPLOAD PETS':
    //   return [
    //     ...state,
    //     {
    //       id: action.id,
    //       text: action.text,
    //       completed: false
    //     }
    //   ]
    // case 'REMOVE_PET_FROM_CATALOGUE':
    //   return [
    //     {
    //       ...state.pets,
    //       pets: action.payload
    //     },
    //   ]
    case 'REMOVE_PET_FROM_CATALOGUE':
      return [
        ...action.payload
      ]
        
      

    
    default:
      return state
  }
}

export default pets