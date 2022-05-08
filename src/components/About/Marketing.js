import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import davinci from "../../Assets/davinci.png"
import {

  DiPhotoshop,
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiCss3
} from "react-icons/di";
import {
  SiMicrosoftexcel,
  SiCanva,
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  
} from "react-icons/si";

import {
AiOutlineInstagram,
AiOutlineHtml5,
} from "react-icons/ai"

function Marketing() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{color: "white"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAANR0lEQVR4nO2de5RXVRXHPzPAjCAICKamPAREMBUVFfMRqYhhscySjFKytSpLQS3LSrMU85Wm0WOlkY98pJHGyjItzVLylSj44K2kQ2D4QIEZmBfz6499f3Jnn3Pv79x7z/39fuB81zqLmeGcvfe999yzz9mvC13oQhe60IUupENNpQVwwA7AKGAksE/w8zBgx6D1D/4FaALeCf5tBP4DLAWWAcuDn5vLKHtiVOMD6Q6MASYE7SjkofhAO/A88HDQ5gEtnmhvV6hFbv5twEagUKa2EfgNcFwgw/seg4GrgFWU7yFEtVXAlYFMFUOllqy9ge8ApwM9HPqvBBaxVRcsA9YhuuJdRF8A9Ab6ITplAKJ3RiJ6Z19E95RCK3A7MlFedrqabRjDgLuQtTxutjYAtyAPbE+P/PcEpgG3UvqtbAfuBPbyyL9q0AM4F5nJUTdgPaJDJlC+N3csMAt4K0auTcAlQH2ZZModE5FlJuqCFyGztmelBAx4TwtkiZJzGTJZtll0R2bWFuwXuBC5Cd0qJaAFNcBk4GnsMncgb1RdpQRMi6FEX9Rq4NTKieaMqYistmt4EhhSOdGSYRJyWtYX0QZcB/SpnGiJsRNwPSK7vp51wAmVE80N05BtoxZ+OXBwBeXKirHACszragVOq6BcsTgfWWO10HcjM80XuiHmlCuBR5GH3Ri05cHfrgCOxK9+2gmYg12vfN0jHy/4IfYl6mseedQBZwH/tfCKO31/Fb9K+GzsS9hlHnlkwvmYwjUBn/DI4wjEcpvWLLISONyjPJOR84nmU/E3ZRrmMrUOWS58YTpikU37MIqtBZndvnAkcq16+aqYTpmEqcDXAQd45HEO9pu7HpgNfAoYwVbfyIjgb7OBDRFjZ3iU7wDMh9JKBXZfQzG3tk34fTNOxjxUtgNXAzs7jB8AXBNB4ySPch6JuXy9TRnPKXWYh742/OqM/sCbmG/f8SloTcScPG8gVmFfmIyp6J/EzZKdGddhLgM+d1Mg5okw/c3A0RnojUdct2Ga12eUUWM65n25xjMPA8djKvG7PfPoh3nzvuGB7jcVzWagrwe6Yfxe8ehAvJG5oB7Tarscv4c+kJ1bmMcK/Lz6dYjDKUzb946or4XHUnIyRn5fMWojH3PIPYrPxR5p/0DRvscj7SIOxXTAXeibyTDMncR1vpkEWKj4jPVI+1BFOy8XrdaBTcjO1BvuUgxWk5/VVu+uBnqkPVDRbozvnhp9gdcVr9t9ER+J+Qrm6c/YrHj18ki7l6K92SNtjc8rXm3AcB+Eb1aEnyNfn/dKxW+kR9qjFe28o0qeVfx+lZXgIEw70slZiZbAPMVvmkfaX1S0H/VI24bPKH6tZDzBX6UILiL/CL+fKZ5zPdL+o6I9yyNtG2qBJYrnFVmI6dgln7M1Ch9TPFuQNzUrhmAaQ8thBDxD8XyNlJN6giL0LuUJ1dkBM77Xx0z+uaK5kfLEWvXCtDwfm4bQbYrIbE8CuuAXinczkoqQFiMwd28/zShjEtyieN+SlEAd5iz9iEcBS2EYpvX0wQz0/qpoteH5oFYCxyr+60loDjpaEWig/IHZdygZCsh6nBR6Z1VAUhDKiVrMGK9EvqNL1OCbPQvogt0RvaVP1kmWrhGY6/d6YA+vkrpBq4DvJRn8TzX4dN/SOcLmwl3A1hS2OOyIaRcr4NeFmwR6t/WI68CemP4InykBSdAN86BYQOKj4pbQGkyrcQF4jMrFEg9WsmzGMVXvQDXwlZwEdMUewFrMm/ujmDHXWvqvBT6Yq6SloUOZnAJCTlWD7stLugSYgD3JZ6alry1or50cPXcJ8Gc6yzXFZZB2ROXuF3bEVzBvtFaOWvZim15WSaOh4xEuchl0pxr0pbykS4HLsd/w7yJRg7b/q5oQT+BMOst2m8ugx9Wg8XlJlwI1wA3Yb7yt/ZLqysU/hs7yzXMZ9KIa9KG8pEuJGsTsUeph3Eh1PQwQJR6W8XmXQXonUI2ZQjVIXFXUw/gx1fcwQMw1YTlXugx6Ww1yCdusFM6lc6hoB2JlqFZon/6bLoO0hzCvBMc+SMho1mC1UxC/TUPwsw+ZemekE4V6Ot9boxCO7bVuofNDqEccO2lRi+RmnIjEce2H2Km6q36bgFeD9grij56PBJptycBfyzIKCQc6GAk6GBo0bY5pQyJHXkLiCP6CxDR3ZOBfT+eH0ILDaV0n0Q9IybwP8C2iM1ld2wbkcDqDdD6RfYKx9xGdouDaViMhqWlDoAYoek5Llg+lfjywhmwXH9UWAZcitUuisG/QZ3FOMqwhXRGBVEr9BTVovwQMa5BkTFvyp+/WgRwINS4sE/8tiJkmCfZXNIxtr17HQV7rMJIsWZciVX40NgF/R8JuliJKuBFZp3sgSnQAYhHdGzFwjgV2i+FVA1yATIAwLqD0lnctoqMWILFZDUj+yQbkYdYiy9IgROeMR7x+4aC9WsT00Y77zk5HYep7bYX21H3ZkZnNM9eKmC7S6qHRyNb2fuyFaxosY2xVfpoQpXwe8UtdHAYg12LLw/+CI41UppOL1aBrHcYMxMy1WwMc5iioC+qBBxSPP1j6zVV9HsRvdMk44H+Kx9u4TbqSxkVbfNAy9bvLzmYmsn8vYgOyzf23w1hXtAEHqb/Z6M9Xvx9Itm27xtPItW0M/W1nZLkuBR0Wq++1FWPo/BRLOah6I0tCeIzvFDeAQzCXClskjDbgFfCb0lCETmFrorRrWe9g93dhtAOmCzcucnCq6ruEfNykeiltxG5FqMecIE5+h4TojplR9tmY/kNU381YllLbktUMPKX+dkwMoxPV77/F38k6jEnq93nYl6IWxIUQN9YHiiUAw/h4TH8drfgElhK1UTGmOiIi7oHodTFLQFsUdsXcIDwQ01//3zjgA14lEuhr3Tumr34g/0jC6Cg6v16riN7ba1NL/4h+WaDrqWwhPrZqMObh8Lwc5HI1hdRiWi6OSMKoDtPuE+U5DIecdpCP/nhJyeLiaXtCjVmYg1zdFY/1Ef2Os/SzhpJGLVmtmHkZUakI4e1fDf5zD4/B9Fre4TBOr+9j8B+frFPCN1p7mYGG9yLb+ESwPVVbOoKu5DkuKaMSuF/Rfxc3f0UfRObwWN8hTR9W9F+09LGlI8Tp5Ei4JuzoUPtvp2EWgYMxdcFPEozXvvcO5KDoCxcq+jdZ+nhL2AEx3IWJ2VLatA1rEf782Y8o2i24lQsvYjim7ekhT7LZ0tW0TcvW5/IsTG1Jn59WfXa39PlkFqYBTlE0C6TLpNI5iwX8JK6erGg2Y1qnddJnMx7ipH+tiC7AfANuUn1WkS04YhdMA94G0p0ldsHUJW8Qb9ovhX6IqzlMU2eY1WCmRd+Qged7GIEZVztV9Rlt6XMf6YrG1CO+Ez2rz0xBq4izLPQeJl0ARx1mjG47cg/COF31aSPZchsLHV66BnPLdxnmRf+JZJUY6jBLHPnYHdVg3sQC8DuSTZodMXd9Bcyg776Yb7iT78MVe2EWn9EFwLpjHsYKiEfOpRLccOzlyV/Fj9ljV2SHo+k/hdvMnYhYvvX4f2F6XvXurpEcPhRzkWLShmnW3p3oLww8i0R/HIKYV/ojD3oK8lbYauGuxlN9kAAjsAdftCFJQFMCmfojOvDQQObnIq7pRUxddBjm8m1za2dGPeJQCTNagbl0DUScRLYLSNIaMNdlH9gXP59YegbTS9gP8y1aTI5fU5iAeVCbY+nXE6keapv1Lu1e8g1h3TngkUa2VuR8ZrNa6DS6DlKeypPAli4WVaD4IGQ5sgUG2Np84p08vjEVc2sa9yDmIDYxG2wJqlfnKPt76IGUQNVr8OSYMbsh0SN3IK/wuqCtBf7G1uL5lUKxuP9DgUxF+RYjMp9D/LnlJEy98ThlKhMLcoLXfpBNZCvluq3icEyX8TrKWykCkEo6eZcar3bYSo23kK7gsxdMxSzl/Q7vjzdlHGZ9yA7cg+Zyw9mYyqwZ0wi5PaFqP1dRxExM4dqonnRknzgHe868S6BcWTED+yfy5pJP4EO5sRNSVl1fXweSB1OVOA37meNlxGSyreIw7HasFuBzFZTLCSdgJo4WkNd8Fv4L4OeJvoih0LZEvUUFd1NJMQTz8FhsryNFhqsxbbmIGsSfoatThw99PgpzlhWlPr36AtX36dVaZAf1DHaZi59eLdsJPA8ch2RNRdmIliCRGT5LiidFLyRYQwckhNtiymAoLBeKn+/WhTW16WUOMkPL8dbUIjasG4nPzm1iO/t8dxhDka8ElDLLr0Fcnmfg19M2BHkTbqd0lnBbIIN3T18cKqVYhyNetGm4OW9eRZaMpYiTbDliQ2pEIhmLn53ojTiJeiM+j32Q6PxRiGPKxeDXCtyKmM6d0pa3JwxCAscaiJ+t5WivBbJUqr5kVaEWyZ+4FTOGKs+2HimB+1Hy/8iAE6rxLNANib+dELSjcKze6YB2JFn/4aA9ht+E0MyoxgeiUY/ogrA+2AvRE33YqjNgq07ZGPy8EtE5Rb2zDEsaWRe60IUudKEL2wP+D3UcjPj0LBUMAAAAAElFTkSuQmCC"/>
      </Col>
         <Col xs={4} md={2} className="tech-icons">
        <AiOutlineInstagram/>
      </Col>
    </Row>
  );
}

export default Marketing;
