const question=$('.panel-question');
const collapse=$('#btn-collapse');
const heading=$('.panel-heading');
const answer=$('.panel-body');

question.find('.panel-body').hide();      //1.panel-qustion 밑의 panel-body를 찾아서 숨겨라
heading.click(function(){                 //2.heading 클릭하면 아래 function이 실행된다.
    question.find('.panel-body').hide();  //3.일단 숨겨
    $(this).next().show();                //4.니가 누른거(heading)의 .next(다음태그=panel-body)를 .show()=보여줘라
});
collapse.click(function(){                //콜랩스버튼 클릭하면
    question.find('.panel-body').hide();  //qustion 밑의 panel-body를 찾아서 숨겨라
})