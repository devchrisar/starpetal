import React from "react";
import "../sass_styles/_category-filter.scss";
import "../sass_styles/_category-tab-content.scss";

export default function SideBar() {
  return (
    <div className="row">
      <div
        className="col-lg-4 aside aside--left filter-col filter-mobile-col filter-col--sticky js-filter-col filter-col--opened-desktop"
        data-grid-tab-content
      >
        <div className="filter-col-content filter-mobile-content">
          <div className="sidebar-block">
            <div className="sidebar-block_title">
              <span>Current selection</span>
            </div>
            <div className="sidebar-block_content">
              <div className="selected-filters-wrap">
                <ul className="selected-filters">
                  <li>
                    <a href="/id">Grey</a>
                  </li>
                  <li>
                    <a href="/id">Men</a>
                  </li>
                  <li>
                    <a href="/id">Above $200</a>
                  </li>
                </ul>
                <div className="d-flex flex-wrap align-items-center">
                  <a href="/id" className="clear-filters">
                    <span>Clear All</span>
                  </a>
                  <div className="selected-filters-count ml-auto d-none d-lg-block">
                    Selected <span>6 items</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-block d-filter-mobile">
            <h3 className="mb-1">SORT BY</h3>
            <div className="select-wrapper select-wrapper-xs">
              <select className="form-control">
                <option value="featured">Featured</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
          <div className="sidebar-block filter-group-block open">
            <div className="sidebar-block_title">
              <span>Categories</span>
              <span className="toggle-arrow">
                <span />
                <span />
              </span>
            </div>
            <div className="sidebar-block_content">
              <ul className="category-list">
                <li className="active">
                  <a href="category.html" title="Casual" className="open">
                    Casual&nbsp;<span>(30)</span>
                  </a>
                  <div className="toggle-category js-toggle-category">
                    <span>
                      <i className="icon-angle-down" />
                    </span>
                  </div>
                  <ul className="category-list category-list">
                    <li>
                      <a href="category.html" title="Men">
                        Men&nbsp;<span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html" title="Women">
                        Women&nbsp;<span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html" title="Accessories">
                        Accessories&nbsp;<span>(10)</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="category.html" title="T-Shirts" className="open">
                    T-Shirts
                  </a>
                </li>
                <li>
                  <a href="category.html" title="Medical" className="open">
                    Medical
                  </a>
                </li>
                <li>
                  <a href="category.html" title="FoodMarket" className="open">
                    FoodMarket
                  </a>
                </li>
                <li>
                  <a href="category.html" title="Bikes" className="open">
                    Bikes&nbsp;<span>(12)</span>
                  </a>
                </li>
                <li>
                  <a href="category.html" title="Cosmetics" className="open">
                    Cosmetics&nbsp;<span>(16)</span>
                  </a>
                </li>
                <li>
                  <a href="category.html" title="Fishing" className="open">
                    Fishing&nbsp;<span>(20)</span>
                  </a>
                </li>
                <li>
                  <a href="category.html" title="Electronics" className="open">
                    Electronics&nbsp;<span>(15)</span>
                  </a>
                </li>
                <li>
                  <a href="category.html" title="Games" className="open">
                    Games&nbsp;<span>(14)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-block filter-group-block collapsed">
            <div className="sidebar-block_title">
              <span>Colors</span>
              <span className="toggle-arrow">
                <span />
                <span />
              </span>
            </div>
            <div className="sidebar-block_content">
              <ul className="color-list two-column">
                <li className="active">
                  <a href="/id" data-tooltip="Dark Red" title="Dark Red">
                    <span className="value"></span>
                    <span className="colorname">Red (87)</span>
                  </a>
                </li>
                <li>
                  <a href="/id" data-tooltip="Pink" title="Pink">
                    <span className="value"></span>
                    <span className="colorname">Pink (95)</span>
                  </a>
                </li>
                <li>
                  <a href="/id" data-tooltip="Violet" title="Violet">
                    <span className="value"></span>
                    <span className="colorname">Violet (18)</span>
                  </a>
                </li>
                <li>
                  <a href="/id" data-tooltip="Blue" title="Blue">
                    <span className="value"></span>
                    <span className="colorname">Blue (78)</span>
                  </a>
                </li>
                <li>
                  <a href="/id" data-tooltip="Marine" title="Marine">
                    <span className="value"></span>
                    <span className="colorname">Marine (45)</span>
                  </a>
                </li>
                <li>
                  <a href="/id" data-tooltip="Orange" title="Orange">
                    <span className="value"></span>
                    <span className="colorname">Orange (96)</span>
                  </a>
                </li>
                <li>
                  <a href="/id" data-tooltip="Yellow" title="Yellow">
                    <span className="value"></span>
                    <span className="colorname">Yellow (55)</span>
                  </a>
                </li>
                <li>
                  <a href="/id" data-tooltip="Dark Yellow" title="Dark Yellow">
                    <span className="value"></span>
                    <span className="colorname">Dark Yellow (2)</span>
                  </a>
                </li>
                <li>
                  <a href="/id" data-tooltip="Black" title="Black">
                    <span className="value"></span>
                    <span className="colorname">Black (15)</span>
                  </a>
                </li>
                <li>
                  <a href="/id" data-tooltip="White" title="White">
                    <span className="value"></span>
                    <span className="colorname">White (58)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-block filter-group-block collapsed">
            <div className="sidebar-block_title">
              <span>Size</span>
              <span className="toggle-arrow">
                <span />
                <span />
              </span>
            </div>
            <div className="sidebar-block_content">
              <ul
                className="category-list two-column size-list"
                data-sort='["XXS","XS","S","M","L","XL","XXL","XXXL"]'
              >
                <li data-value="L" className="active">
                  <a href="/id">L</a>
                </li>
                <li data-value="XL">
                  <a href="/id">XL</a>
                </li>
                <li data-value="XXS">
                  <a href="/id">XXS</a>
                </li>
                <li data-value="XS">
                  <a href="/id">XS</a>
                </li>
                <li data-value="S">
                  <a href="/id">S</a>
                </li>
                <li data-value="XXL">
                  <a href="/id">XXL</a>
                </li>
                <li data-value="XXXL">
                  <a href="/id">XXXL</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-block filter-group-block collapsed">
            <div className="sidebar-block_title">
              <span>Brands</span>
              <span className="toggle-arrow">
                <span />
                <span />
              </span>
            </div>
            <div className="sidebar-block_content">
              <ul className="category-list">
                <li>
                  <a href="/id">Adidas</a>
                </li>
                <li>
                  <a href="/id">Nike</a>
                </li>
                <li className="active">
                  <a href="/id">Reebok</a>
                </li>
                <li>
                  <a href="/id">Ralph Lauren</a>
                </li>
                <li>
                  <a href="/id">Delpozo</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-block filter-group-block collapsed">
            <div className="sidebar-block_title">
              <span>Price</span>
              <span className="toggle-arrow">
                <span />
                <span />
              </span>
            </div>
            <div className="sidebar-block_content">
              <ul className="category-list">
                <li>
                  <a href="/id">$100-$200</a>
                </li>
                <li className="active">
                  <a href="/id">Above $200</a>
                </li>
                <li>
                  <a href="/id">Under $100</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-block filter-group-block collapsed">
            <div className="sidebar-block_title">
              <span>Popular tags</span>
              <span className="toggle-arrow">
                <span />
                <span />
              </span>
            </div>
            <div className="sidebar-block_content">
              <ul className="tags-list">
                <li className="active">
                  <a href="/id">Jeans</a>
                </li>
                <li>
                  <a href="/id">St.Valentine’s gift</a>
                </li>
                <li>
                  <a href="/id">Sunglasses</a>
                </li>
                <li>
                  <a href="/id">Discount</a>
                </li>
                <li>
                  <a href="/id">Maxi dress</a>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="https://bit.ly/3eJX5XE"
            className="bnr image-hover-scale bnr--bottom bnr--left"
            data-fontratio="3.95"
          >
            <div className="bnr-img"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
