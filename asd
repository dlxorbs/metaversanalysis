
      <!-- 두번째 카메라 -->
      <a-entity id="cameraRig" position="0 24 8">
        <a-entity id="second-camera" camera look-controls></a-entity>
      </a-entity>

      <!-- 이동경로 저장 -->
      <a-entity id="positionMap" position="0 0 0"></a-entity>

      <!-- 로고 -->
      <a-entity
        id="guide"
        class="detecter clickable guide"
        animation-mixer="clip: roll;"
        position="11 6 -22"
        rotation="0 90 0"
        scale="0.2 0.2 0.2"
        raycaster-detected
      >
        <a-entity id="logo3D" gltf-model="#logo"></a-entity>
        <a-image
          src="#my-image"
          rotation="0 -90 0"
          position="-1 -8 0"
          scale="24 6 6"
          opacity="0"
          id="image"
        ></a-image>
        <a-image
          src="#my-image2"
          rotation="0 -90 0"
          position="-12 -1 0"
          scale="40 24 18"
          opacity="0"
          id="image2"
        ></a-image>
      </a-entity>

      <!-- NPC -->
      <a-entity
        id="ssbob"
        gltf-model="#sbob2"
        animation-mixer="clip: default;"
        position="0 0 -18"
        rotation="0 30 0"
        scale="0.4 0.4 0.4"
      ></a-entity>
      <a-entity
        id="ssbob"
        gltf-model="#sbob2"
        animation-mixer="clip: default;"
        position="2 0 -17"
        rotation="0 -60 0"
        scale="0.4 0.4 0.4"
      ></a-entity>

      <!-- 이미지선택하는 -->
      <a-image
        src="#my-image3"
        rotation="-20 90 0"
        position="-11 1 -12"
        scale="3 2 2"
        opacity="0"
        id="image3"
      ></a-image>
      <a-box
        cursor-listener
        buttonback
        analysis-click
        rotation="20 -90 0"
        position="-11 1 -9.5"
        scale="0.8 0.8 0.8"
        opacity="0"
        class="clickable"
        id="btn1"
      ></a-box>
      <a-box
        cursor-listener
        buttonnext
        analysis-click
        rotation="20 -90 0"
        position="-11 1 -14.5"
        scale="0.8w 0.8 0.8"
        opacity="0"
        class="clickable"
        id="btn2"
      ></a-box>

      <a-box
        id="box"
        hello-world
        position="-12 0 -12"
        raycaster-detected
        opacity="0"
      ></a-box>