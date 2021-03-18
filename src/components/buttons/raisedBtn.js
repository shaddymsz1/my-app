import React,{Fragment} from 'react';
import Breadcrumb from '../common/breadcrumb';

const RaisedBtn = () => {
    return (
        <Fragment>
            <Breadcrumb title="Raised Style" parent="Buttons" />
            <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5>Default buttons</h5>
                    <span>Add <code>.btn-pill</code> and <code>.btn-air-*</code> class  for raised button</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-primary btn-air-primary" type="button">Primary Button</button>
                    <button className="btn btn-pill btn-secondary btn-air-secondary btn-air-secondary" type="button">Secondary Button</button>
                    <button className="btn btn-pill btn-success btn-air-success btn-air-success" type="button">Success Button</button>
                    <button className="btn btn-pill btn-info btn-air-info btn-air-info" type="button">Info Button</button>
                    <button className="btn btn-pill btn-warning btn-air-warning btn-air-warning" type="button">Warning Button</button>
                    <button className="btn btn-pill btn-danger btn-air-danger" type="button">Danger Button</button>
                    <button className="btn btn-pill btn-light btn-air-light" type="button">Light Button</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>Large buttons</h5>
                    <span>Add <code>.btn-pill</code>,<code>.btn-air-*</code> and <code>.btn-lg</code> class for large button</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-primary btn-air-primary btn-lg" type="button">Primary Button</button>
                    <button className="btn btn-pill btn-secondary btn-air-secondary btn-lg" type="button">Secondary Button</button>
                    <button className="btn btn-pill btn-success btn-air-success btn-lg" type="button">Success Button</button>
                    <button className="btn btn-pill btn-info btn-air-info btn-lg" type="button">Info Button</button>
                    <button className="btn btn-pill btn-warning btn-air-warning btn-lg" type="button">Warning Button</button>
                    <button className="btn btn-pill btn-danger btn-air-danger btn-lg" type="button">Danger Button</button>
                    <button className="btn btn-pill btn-light btn-air-light btn-lg" type="button">Light Button</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>Small buttons</h5>
                    <span>Add <code>.btn-pill</code>,<code>.btn-air-*</code> and <code>.btn-sm</code> class for small button</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-primary btn-air-primary btn-sm" type="button">Primary Button</button>
                    <button className="btn btn-pill btn-secondary btn-air-secondary btn-sm" type="button">Secondary Button</button>
                    <button className="btn btn-pill btn-success btn-air-success btn-sm" type="button">Success Button</button>
                    <button className="btn btn-pill btn-info btn-air-info btn-sm" type="button">Info Button</button>
                    <button className="btn btn-pill btn-warning btn-air-warning btn-sm" type="button">Warning Button</button>
                    <button className="btn btn-pill btn-danger btn-air-danger btn-sm" type="button">Danger Button</button>
                    <button className="btn btn-pill btn-light btn-air-light btn-sm" type="button">Light Button</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>Extra Small buttons</h5>
                    <span>Add <code>.btn-pill</code>,<code>.btn-air-*</code> and <code>.btn-xs</code> class for extra small button</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-primary btn-air-primary btn-xs" type="button">Primary Button</button>
                    <button className="btn btn-pill btn-secondary btn-air-secondary btn-xs" type="button">Secondary Button</button>
                    <button className="btn btn-pill btn-success btn-air-success btn-xs" type="button">Success Button</button>
                    <button className="btn btn-pill btn-info btn-air-info btn-xs" type="button">Info Button</button>
                    <button className="btn btn-pill btn-warning btn-air-warning btn-xs" type="button">Warning Button</button>
                    <button className="btn btn-pill btn-danger btn-air-danger btn-xs" type="button">Danger Button</button>
                    <button className="btn btn-pill btn-light btn-air-light btn-xs" type="button">Light Button</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>Active Buttons</h5>
                    <span>Add <code>.active</code> for active state</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-primary btn-air-primary active" type="button">Active</button>
                    <button className="btn btn-pill btn-secondary btn-air-secondary active" type="button">Active</button>
                    <button className="btn btn-pill btn-success btn-air-success active" type="button">Active</button>
                    <button className="btn btn-pill btn-info btn-air-info active" type="button">Active</button>
                    <button className="btn btn-pill btn-warning btn-air-warning active" type="button">Active</button>
                    <button className="btn btn-pill btn-danger btn-air-danger active" type="button">Active</button>
                    <button className="btn btn-pill btn-light btn-air-light active txt-dark" type="button">Active</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>Disabled buttons</h5>
                    <span>Add <code>.disabled</code> class or <code>disabled="disabled"</code> attribute for disabled button</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-primary btn-air-primary disabled" type="button">Disabled</button>
                    <button className="btn btn-pill btn-secondary btn-air-secondary disabled" type="button">Disabled</button>
                    <button className="btn btn-pill btn-success btn-air-success disabled" type="button">Disabled</button>
                    <button className="btn btn-pill btn-info btn-air-info disabled" type="button">Disabled</button>
                    <button className="btn btn-pill btn-warning btn-air-warning disabled" type="button">Disabled</button>
                    <button className="btn btn-pill btn-danger btn-air-danger disabled" type="button">Disabled</button>
                    <button className="btn btn-pill btn-light btn-air-light disabled" type="button">Disabled</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>Custom state buttons</h5>
                    <span>The <code>.btn</code> class used with <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code> and <code>&lt;input&gt;</code> elements.</span>
                  </div>
                  <div className="card-body btn-showcase"><a className="btn btn-pill btn-primary btn-air-primary" href="#javascript" data-toggle="tooltip" title="btn btn-primary" role="button">Link</a>
                    <input className="btn btn-pill btn-secondary btn-air-secondary btn-air-secondary" type="button" value="Input" data-toggle="tooltip" title="btn btn-secondary" />
                    <input className="btn btn-pill btn-success btn-air-success btn-air-success" type="submit" value="Submit" data-toggle="tooltip" title="btn btn-success" />
                    <button className="btn btn-pill btn-info btn-air-info btn-air-info" type="submit">Button</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>outline buttons</h5>
                    <span>Add <code>.btn-pill</code>,<code>.btn-air-*</code> and <code>.btn-outline-*</code> class for button with outline</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-outline-primary btn-air-primary" type="button">Primary Button</button>
                    <button className="btn btn-pill btn-outline-secondary btn-air-secondary" type="button">Secondary Button</button>
                    <button className="btn btn-pill btn-outline-success btn-air-success" type="button">Success Button</button>
                    <button className="btn btn-pill btn-outline-info btn-air-info" type="button">Info Button</button>
                    <button className="btn btn-pill btn-outline-warning btn-air-warning" type="button">Warning Button</button>
                    <button className="btn btn-pill btn-outline-danger btn-air-danger" type="button">Danger Button</button>
                    <button className="btn btn-pill btn-outline-light btn-air-light txt-dark" type="button">Light Button</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>bold Border outline buttons</h5>
                    <span>Add <code>.btn-pill</code>,<code>.btn-air-*</code> and <code>.btn-outline-*-2x</code> class for button with bold outline</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-outline-primary-2x btn-air-primary" type="button">Primary Button</button>
                    <button className="btn btn-pill btn-outline-secondary-2x btn-air-secondary" type="button">Secondary Button</button>
                    <button className="btn btn-pill btn-outline-success-2x btn-air-success" type="button">Success Button</button>
                    <button className="btn btn-pill btn-outline-info-2x btn-air-info" type="button">Info Button</button>
                    <button className="btn btn-pill btn-outline-warning-2x btn-air-warning" type="button">Warning Button</button>
                    <button className="btn btn-pill btn-outline-danger-2x btn-air-danger" type="button">Danger Button</button>
                    <button className="btn btn-pill btn-outline-light-2x btn-air-light txt-dark" type="button">Light Button</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>outline Large buttons</h5>
                    <span><code>.btn-pill</code>,<code>.btn-air-*</code>,<code>.btn-outline-*</code> and <code>.btn-lg</code> class for large button with outline</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-outline-primary btn-air-primary btn-lg" type="button">Primary Button</button>
                    <button className="btn btn-pill btn-outline-secondary btn-air-secondary btn-lg" type="button">Secondary Button</button>
                    <button className="btn btn-pill btn-outline-success btn-air-success btn-lg" type="button">Success Button</button>
                    <button className="btn btn-pill btn-outline-info btn-air-info btn-lg" type="button">Info Button</button>
                    <button className="btn btn-pill btn-outline-warning btn-air-warning btn-lg" type="button">Warning Button</button>
                    <button className="btn btn-pill btn-outline-danger btn-air-danger btn-lg" type="button">Danger Button</button>
                    <button className="btn btn-pill btn-outline-light btn-air-light btn-lg txt-dark" type="button">Light Button</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>outline small buttons</h5>
                    <span><code>.btn-pill</code>,<code>.btn-air-*</code>,<code>.btn-outline-*</code> and <code>.btn-sm</code> class for small button with outline</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-outline-primary btn-air-primary btn-sm" type="button">Primary Button</button>
                    <button className="btn btn-pill btn-outline-secondary btn-air-secondary btn-sm" type="button">Secondary Button</button>
                    <button className="btn btn-pill btn-outline-success btn-air-success btn-sm" type="button">Success Button</button>
                    <button className="btn btn-pill btn-outline-info btn-air-info btn-sm" type="button">Info Button</button>
                    <button className="btn btn-pill btn-outline-warning btn-air-warning btn-sm" type="button">Warning Button</button>
                    <button className="btn btn-pill btn-outline-danger btn-air-danger btn-sm" type="button">Danger Button</button>
                    <button className="btn btn-pill btn-outline-light btn-air-light btn-sm txt-dark" type="button">Light Button</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>outline extra small buttons</h5>
                    <span><code>.btn-pill</code>,<code>.btn-air-*</code>,<code>.btn-outline-*</code> and <code>.btn-xs</code> class for extra small button with outline</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-outline-primary btn-air-primary btn-xs" type="button">Primary Button</button>
                    <button className="btn btn-pill btn-outline-secondary btn-air-secondary btn-xs" type="button">Secondary Button</button>
                    <button className="btn btn-pill btn-outline-success btn-air-success btn-xs" type="button">Success Button</button>
                    <button className="btn btn-pill btn-outline-info btn-air-info btn-xs" type="button">Info Button</button>
                    <button className="btn btn-pill btn-outline-warning btn-air-warning btn-xs" type="button">Warning Button</button>
                    <button className="btn btn-pill btn-outline-danger btn-air-danger btn-xs" type="button">Danger Button</button>
                    <button className="btn btn-pill btn-outline-light btn-air-light btn-xs txt-dark" type="button">Light Button</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>Disabled outline buttons</h5>
                    <span>Add <code>.disabled</code> class or <code>disabled="disabled"</code> attribute for disabled button</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-outline-primary btn-air-primary disabled" type="button">Disabled</button>
                    <button className="btn btn-pill btn-outline-secondary btn-air-secondary disabled" type="button">Disabled</button>
                    <button className="btn btn-pill btn-outline-success btn-air-success disabled" type="button">Disabled</button>
                    <button className="btn btn-pill btn-outline-info btn-air-info disabled" type="button">Disabled</button>
                    <button className="btn btn-pill btn-outline-warning btn-air-warning disabled" type="button">Disabled</button>
                    <button className="btn btn-pill btn-outline-danger btn-air-danger disabled" type="button">Disabled</button>
                    <button className="btn btn-pill btn-outline-light btn-air-light disabled txt-dark" type="button">Disabled</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>Gradien buttons</h5>
                    <span><code>.btn-pill</code>,<code>.btn-air-*</code>,<code>.btn-*</code> and <code>.btn-*-gradien</code> class for gradien button</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-primary btn-air-primary btn-primary-gradien" type="button">Primary Button</button>
                    <button className="btn btn-pill btn-secondary btn-air-secondary btn-secondary-gradien" type="button">Secondary Button</button>
                    <button className="btn btn-pill btn-success btn-air-success btn-success-gradien" type="button">Success Button</button>
                    <button className="btn btn-pill btn-info btn-air-info btn-info-gradien" type="button">Info Button</button>
                    <button className="btn btn-pill btn-warning btn-air-warning btn-warning-gradien" type="button">Warning Button</button>
                    <button className="btn btn-pill btn-danger btn-air-danger btn-danger-gradien" type="button">Danger Button</button>
                    <button className="btn btn-pill btn-light btn-air-light btn-light-gradien txt-dark" type="button">Light Button</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
    );
};

export default RaisedBtn;