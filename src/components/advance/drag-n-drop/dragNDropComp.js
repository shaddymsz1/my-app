import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';

import dragula from 'react-dragula';

const DragNDropComp = () => {

  const dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {};
      dragula([componentBackingInstance], options);
    }
  };

  const dragulaDecoratorSpill = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {
        isContainer: function (el) { return false; },
        moves: function (el, source, handle, sibling) { return true; },
        accepts: function (el, target, source, sibling) { return true; },
        invalid: function (el, handle) { return false; },
        direction: 'vertical',
        copy: false,
        copySortSource: false,
        revertOnSpill: true,
        removeOnSpill: true,
        mirrorContainer: document.body,
        ignoreInputTextSelection: true
      };
      dragula([componentBackingInstance], options);
    }
  };


  const dragulaDecoratorRight = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {
        copyItem: (el, target, source, sibling) => {
          return sibling.id === 'left';
        },
        accepts: (el, target, source, sibling) => {
          // To avoid dragging from right to left container
          return target.id === 'left';
        },
        copy: true,
        copySortSource: true,
        removeOnSpill: false,
        mirrorContainer: document.getElementById('right'),
      };
      dragula([componentBackingInstance], options);
    }
  };



  return (
    <Fragment>
      <Breadcrumb title="Drag-N-Drop" parent="Advance" />
      <div className="container-fluid">

        <div className="card">
          <div className="card-header">
            <h5>Click And Drag</h5>
          </div>
          <div className="card-body">
            <div className="row ui-sortable small-drag" id="draggableMultiple">
              <div className="col-sm-12">
                <div className='container' ref={dragulaDecorator}>
                  <div>You can move these elements between these two containers</div>
                  <div>Moving them anywhere else isn't quite possible</div>
                  <div>There's also the possibility of moving elements around in the same container, changing their position</div>
                  <div>This is the default use case. You only need to specify the containers you want to use</div>
                  <div>More interactive use cases lie ahead</div>
                  <div>Make sure to check out the documentation on GitHub!</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd draggable */}

        <div className="card">
          <div className="card-header">
            <h5>Spill Drag N Drop</h5>
          </div>
          <div className="card-body">
            <div className="row ui-sortable" id="draggableMultiple">
              <div className="col-sm-12">
                <div className='container' ref={dragulaDecoratorSpill}>
                  <div>You can move these elements between these two containers</div>
                  <div>Moving them anywhere else isn't quite possible</div>
                  <div>There's also the possibility of moving elements around in the same container, changing their position</div>
                  <div>This is the default use case. You only need to specify the containers you want to use</div>
                  <div>You can move these elements between these two containers</div>
                  <div>Moving them anywhere else isn't quite possible</div>
                  <div>Make sure to check out the documentation on GitHub!</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3d drag and drop */}
        <div className="card">
          <div className="card-header">
            <h5>Copy Drag N Drop</h5>
          </div>
          <div className="card-body">
            <div className="row ui-sortable" id="draggableMultiple">
              <div className="col-sm-12">
                <div className='container' id="right" ref={dragulaDecoratorRight}>
                  <div>There's also the possibility of moving elements around in the same container, changing their position</div>
                  <div>This is the default use case. You only need to specify the containers you want to use</div>
                  <div>You can move these elements between these two containers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DragNDropComp;