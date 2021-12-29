$(document).ready(function(e) {
    $wh = $(window).height();
//			$('#firebg').height($wh);

        init();
        animate();
    
        var scene,
            camera,
            particles,
            particleMaterial,
            particleTexture,
            pointCloud,
            renderer,
            windWeight,
            windLength,
            windFlg,
            windCount,
            pauseFlg;
                
    function init() {
        var particleNum = 100,
        area = 1000,
        particle,
        i,
        canvasWidth = $(window).width(),
        canvasHeight =$wh;
        
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(77, canvasWidth / canvasHeight,200,500);
        
        camera.position.z = 400;
        
        particles = new THREE.Geometry();
        particleTexture = THREE.ImageUtils.loadTexture("./images/header/particle.png");
        
        particleMaterial = new THREE.PointCloudMaterial({
            color: 0xffffff,
            size: 10,
            transparent: true,
            map:particleTexture,
            vertexColors: THREE.VertexColors
        });
        particlesFlick = [];
        for(var i = 0; i < particleNum;i++){
            var particle = new THREE.Vector3(
                Math.random() * area - (area*0.5),
                Math.random() * area - (area*0.5),
                Math.random() * area - (area*0.5)+100
            );
            particle.velocity = new THREE.Vector3(0,Math.random()*0.4+0.2,0);
            particles.vertices.push(particle);
            particles.colors.push(new THREE.Color(0xffffff));
            particles.flickWeight = Math.floor(Math.random()*100)+5;
            particles.flickCount = 0;
            particles.flickStop = Math.floor(Math.random()*30)+10;
            particles.flickFlg = false;
        }
        pointCloud = new THREE.PointCloud(particles,particleMaterial);
        pointCloud.sortParticles = true;
        
        scene.add(pointCloud);
        
        renderer = new THREE.WebGLRenderer( { alpha: true,antialias:true } );
        renderer.setSize( canvasWidth, canvasHeight );
        $("#firebg").append(renderer.domElement);
        
        windWeight = Math.floor(Math.random() * 60 * 10 + 120);
        windLength = Math.floor(Math.random() * 60 * 5 + 300);
        windCount = 0;
        windFlg = false;
        pauseFlg = false;
    }

    function animate() {
        requestAnimationFrame( animate );
        render();
    }
    function render() {

        var len = particles.vertices.length,
        i = 0,
        particle,
        tmpColor,
        tmpWind;

        if(pauseFlg) { return; }

        pointCloud.rotation.y += 0.0005;			//speed

        if(windWeight > 0){
            windWeight--;
            if(windFlg){pointCloud.rotation.y += 0.006;}
        }else if(windCount <= windLength){
            if(windFlg){
                tmpWind = ((windLength-windCount)/windLength) * 0.006;
            }else{
                tmpWind = (windCount/windLength) * 0.006;
            }
            windCount++;
            pointCloud.rotation.y += tmpWind;
        }else{
            windWeight = Math.floor(Math.random() * 60 * 10 + 300);
            windLength = Math.floor(Math.random() * 60 * 5 + 120);
            windCount = 0;
            windFlg = !windFlg;
        }

        for(; i < len;i++){
            particle = particles.vertices[i];
            if(particle.y > 300 || particle.x > 800){
                particle.y = -400;
                particle.velocity.y = Math.random()*0.4+0.2;
            }
            var tmp = Math.random();
            particle.velocity.y += tmp*tmp*0.005+0.002;
            particle.add(particle.velocity);
            if(particle.flickWeight > 0){
                particle.flickWeight--;
            }else if(particle.flickCount <= particle.flickStop){
                if(particle.flickFlg){
                    tmpColor = Math.floor((particle.flickCount/particle.flickStop) * 128 + 127) / 255; //色
                }else{
                    tmpColor = Math.floor(((particle.flickStop-particle.flickCount)/particle.flickStop) * 128 + 127) / 255; //色
                }
//            tmpColor = 255;
                particle.flickCount++;
                particles.colors[i].setRGB(1,1,tmpColor);
    
            }else{
                particle.flickWeight = Math.floor(Math.random()*100)+5;
                particle.flickCount = 0;
                particle.flickStop = Math.floor(Math.random()*30)+10;
                particle.flickFlg = !particle.flickFlg;
            }
        }

        pointCloud.geometry.__dirtyVertices = true;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
    }
$(window).on("resize",onResize)
    function onResize(event){
        var canvasWidth = $(window).width(),
        canvasHeight =$wh;
        renderer.setSize( canvasWidth, canvasHeight );
        camera.aspect = canvasWidth / canvasHeight;
        camera.updateProjectionMatrix();
    }
    var _pause = function(){ pauseFlg = true; };
    var _play = function(){ pauseFlg = false; };
});

// forked from phi's "Water Effect - tmlib.js version" http://jsdo.it/phi/7zF2
// forked from matsu4512's "Fire Effect" http://jsdo.it/matsu4512/b1jZ

$(window).on('load',function(){


// forked from phi's "Fire Effect - tmlib.js version" http://jsdo.it/phi/fv2D
// forked from phi's "Water Effect - tmlib.js version" http://jsdo.it/phi/7zF2
// forked from matsu4512's "Fire Effect" http://jsdo.it/matsu4512/b1jZ


});	
