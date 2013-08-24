var jkefex = angular.module('jkefex',[]);
jkefex.controller('mainctrl',['$scope',function($scope){
	$scope.name = "Kiran Kumar";
	$scope.topnavitems = ['Top','Work','Portfolio','Contact'];
	$scope.designation = "Front End Developer - PHP, HTML5, CSS3, Core JS & JQuery";
	$scope.profilepic = 'images/me.jpg';
	$scope.content = {
		cont_one : [
		{'tempurl':'demos/navigator.html','thumb':'images/portfolio01.jpg','title':'jKefex Cam Capture','subtitle':'HTML5 Navigator Plug-in'},
		{'tempurl':'demos/canvaspatt.html','thumb':'images/portfolio02.jpg','title':'jKefex Canvas','subtitle':'HTML5 jKefex Canvas Plug-in'},
		{'tempurl':'demos/validation.html','thumb':'images/portfolio03.jpg','title':'jKefex Validation','subtitle':'HTML5 RegExp Validation Plug-in'}
		],
		cont_two : [
		{'tempurl':'demos/trignomentryfuncs.html','thumb':'images/portfolio04.jpg','title':'jKefex Trignomentry','subtitle':'HTML5 Trignomentry Plug-in'},
		{'tempurl':'demos/dragandrop.html','thumb':'images/portfolio05.jpg','title':'jKefex Drag and Drop','subtitle':'HTML5 Drag And Drop Plug-in'},
		{'tempurl':'demos/html5fileupload.html','thumb':'images/portfolio06.jpg','title':'jKefex File API','subtitle':'HTML5 File API Plug-in'}
		],
		cont_three : [
		{'tempurl':'demos/webaudioapi.html','thumb':'images/portfolio07.jpg','title':'jKefex Web Audio API','subtitle':'HTML5 Web Audio API Plug-in'},
		{'tempurl':'demos/workers.html','thumb':'images/portfolio07.jpg','title':'jKefex Workers','subtitle':'HTML5 Workers API Plug-in'},
		{'tempurl':'demos/webfilters.html','thumb':'images/portfolio07.jpg','title':'jKefex CSS3','subtitle':'HHTML5 CSS3 API Plug-in'}
		],
		cont_four : [
		{'tempurl':'demos/particles.html','thumb':'images/portfolio07.jpg','title':'jKefex Canvas Particles','subtitle':'HTML5 canvas Paticles'},
		{'tempurl':'demos/alpha.html','thumb':'images/portfolio07.jpg','title':'jKefex Canvas Logo','subtitle':'HTML5 Canvas Logo'},
		{'tempurl':'demos/localfile_upload.html','thumb':'images/portfolio07.jpg','title':'jKefex Local File Delegation','subtitle':'HTML5 File API Plug-in'}
		]
	};
}]);
jkefex.directive('jkefexdemo',function(){
	return {
		restrict:'E',
		scope:{
			cont:'='
		},
		replace:true,
		template:'<div class="4u" ng-repeat="con in cont"><article class="box box-style2"><a href="{{con.tempurl}}" class="various fancybox.ajax image image-full"><img src="{{con.thumb}}" alt="" /></a>'+
					'<h3><a href="{{con.tempurl}}" style="text-decoration:none" class="various fancybox.ajax">'+
					'{{con.title}}</a></h3>'+
					'<p>{{con.subtitle}}</p></article></div>'
		};
});