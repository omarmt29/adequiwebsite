function Nav (){
    return<>
      <ul class="nav justify-content-center bg-info">
        <li class="nav-item">
          <a class="nav-link text-white" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </>
}

export default Nav;